/**
 * Generate and apply LQIP (Low-Quality Image Placeholders) to images
 * Source: https://frzi.medium.com/lqip-css-73dc6dda2529
 * Usage: pnpm apply-lqip
 */

import type { HTMLElement } from 'node-html-parser'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import glob from 'fast-glob'
import { parse } from 'node-html-parser'
import sharp from 'sharp'

const distDir = 'dist'
const assetsDir = 'src/assets'
const lqipMapPath = 'src/assets/lqip-map.json'

interface LqipMap {
  [path: string]: string
}

interface ImageStats {
  total: number
  cached: number
  new: number
}

interface FileMapping {
  filePath: string
  webUrl: string
}

// Pack RGB color into 11 bits (4 bits R, 4 bits G, 3 bits B)
function packColor11Bit(r: number, g: number, b: number): number {
  const pr = Math.round((r / 255) * 15)
  const pg = Math.round((g / 255) * 15)
  const pb = Math.round((b / 255) * 7)
  return (pr << 7) | (pg << 3) | pb
}

// Pack RGB color into 10 bits (3 bits R, 4 bits G, 3 bits B)
function packColor10Bit(r: number, g: number, b: number): number {
  const pr = Math.round((r / 255) * 7)
  const pg = Math.round((g / 255) * 15)
  const pb = Math.round((b / 255) * 7)
  return (pr << 7) | (pg << 3) | pb
}

async function generateLqipValue(imagePath: string): Promise<string | null> {
  try {
    const instance = sharp(imagePath)

    // Resize to 3x3 to get key colors (Top-Left, Center, Bottom-Right)
    const buffer = await instance
      .resize(3, 3, { fit: 'fill' })
      .removeAlpha() // Force RGB output
      .raw()
      .toBuffer()

    // Extract colors at specific positions
    // 0: Top-Left, 4: Center, 8: Bottom-Right
    // Each pixel is 3 bytes (RGB)
    const getPixel = (index: number) => ({
      r: buffer[index * 3],
      g: buffer[index * 3 + 1],
      b: buffer[index * 3 + 2],
    })

    const c0 = getPixel(0)
    const c1 = getPixel(4)
    const c2 = getPixel(8)

    // Pack colors: [Color0 11b] [Color1 11b] [Color2 10b]
    const pc0 = packColor11Bit(c0.r, c0.g, c0.b)
    const pc1 = packColor11Bit(c1.r, c1.g, c1.b)
    const pc2 = packColor10Bit(c2.r, c2.g, c2.b)

    // Combine into a 32-bit integer
    const combined = (BigInt(pc0) << 21n) | (BigInt(pc1) << 10n) | BigInt(pc2)

    // Convert to 8-digit hex string
    return combined.toString(16).padStart(8, '0')
  }
  catch (error) {
    console.error(`⚠️ Failed to process image: ${imagePath}`, error)
    return null
  }
}

/**
 * LQIP processing functions
 * Image analysis, mapping generation, and HTML application
 */
async function loadExistingLqipMap(): Promise<LqipMap> {
  try {
    const data = await fs.readFile(lqipMapPath, 'utf-8')
    return JSON.parse(data) as LqipMap
  }
  catch {
    return {} as LqipMap
  }
}

async function scanAndAnalyzeImages(): Promise<{ fileMappings: FileMapping[], imageStats: ImageStats, existingMap: LqipMap }> {
  await fs.mkdir(assetsDir, { recursive: true })

  const webpFiles = await glob('_astro/**/*.webp', {
    cwd: distDir,
    absolute: true,
  })

  const existingMap = await loadExistingLqipMap()

  const fileMappings = webpFiles.map(filePath => ({
    filePath,
    webUrl: `/${path.relative(distDir, filePath).replace(/\\/g, '/')}`,
  }))

  const { cached, new: newCount } = fileMappings.reduce((acc, { webUrl }) => {
    existingMap[webUrl] !== undefined ? acc.cached++ : acc.new++
    return acc
  }, { cached: 0, new: 0 })

  return {
    fileMappings,
    imageStats: { total: fileMappings.length, cached, new: newCount },
    existingMap,
  }
}

function cleanLqipMap(existingMap: LqipMap, fileMappings: FileMapping[]): LqipMap {
  return fileMappings.reduce((acc, { webUrl }) => {
    if (existingMap[webUrl] !== undefined) {
      acc[webUrl] = existingMap[webUrl]
    }
    return acc
  }, {} as LqipMap)
}

async function processNewImages(fileMappings: FileMapping[], stats: ImageStats, cleanedMap: LqipMap): Promise<LqipMap> {
  const newMap = { ...cleanedMap }
  let processed = 0
  const concurrencyLimit = 10

  const processFile = async ({ filePath, webUrl }: FileMapping) => {
    const lqipValue = await generateLqipValue(filePath)
    if (lqipValue !== null) {
      newMap[webUrl] = lqipValue
    }
    processed++
    if (processed % 10 === 0 || processed === stats.new) {
      console.log(`🔄 Processing: ${processed}/${stats.new}`)
    }
  }

  const toProcess = fileMappings.filter(m => cleanedMap[m.webUrl] === undefined)

  for (let i = 0; i < toProcess.length; i += concurrencyLimit) {
    const batch = toProcess.slice(i, i + concurrencyLimit)
    await Promise.all(batch.map(processFile))
  }

  console.log(`✅ Generated LQIP styles for ${stats.new} new images`)

  const isNewFile = Object.keys(cleanedMap).length === 0
  await fs.writeFile(lqipMapPath, `${JSON.stringify(newMap, null, 2)}\n`)
  console.log(`📁 LQIP mapping ${isNewFile ? 'saved to' : 'updated in'} ${lqipMapPath}`)

  return newMap
}

function processImage(img: HTMLElement, lqipMap: LqipMap): boolean {
  const src = img.getAttribute('src')
  if (!src) {
    return false
  }

  const lqipValue = lqipMap[src]
  if (lqipValue === undefined) {
    return false
  }

  const currentStyle = img.getAttribute('style') ?? ''
  if (currentStyle.includes('--lqip:')) {
    return false
  }

  const newStyle = currentStyle
    ? `${currentStyle}; --lqip:#${lqipValue}`
    : `--lqip:#${lqipValue}`

  img.setAttribute('style', newStyle)
  return true
}

async function applyLqipToHtml(lqipMap: LqipMap): Promise<number> {
  const htmlFiles = await glob('**/*.html', { cwd: distDir })
  let totalApplied = 0

  for (const htmlFile of htmlFiles) {
    try {
      const filePath = `${distDir}/${htmlFile}`
      const root = parse(await fs.readFile(filePath, 'utf-8'))
      const images = root.querySelectorAll('img')

      if (images.length === 0) {
        continue
      }

      let hasChanges = false
      for (const img of images) {
        const wasUpdated = processImage(img, lqipMap)
        if (wasUpdated) {
          totalApplied++
          hasChanges = true
        }
      }

      if (hasChanges) {
        await fs.writeFile(filePath, root.toString())
      }
    }
    catch (error) {
      console.warn(`⚠️ Failed to process ${htmlFile}:`, error)
      continue
    }
  }

  return totalApplied
}

/**
 * Main workflow
 * Coordinates LQIP generation and application process
 */
async function main() {
  console.log('🔍 Starting LQIP processing...')

  const { fileMappings, imageStats, existingMap } = await scanAndAnalyzeImages()

  if (imageStats.total === 0) {
    console.log('✨ No images found to process')
    return
  }

  console.log(`📦 Found ${imageStats.total} images (${imageStats.cached} cached, ${imageStats.new} new)`)

  const cleanedMap = cleanLqipMap(existingMap, fileMappings)

  let lqipMap: LqipMap
  if (imageStats.new > 0) {
    lqipMap = await processNewImages(fileMappings, imageStats, cleanedMap)
  }
  else {
    lqipMap = cleanedMap

    if (Object.keys(existingMap).length > Object.keys(cleanedMap).length) {
      await fs.writeFile(lqipMapPath, `${JSON.stringify(cleanedMap, null, 2)}\n`)
    }
  }

  const appliedCount = await applyLqipToHtml(lqipMap)

  if (appliedCount === 0) {
    console.log('✨ All images already have LQIP styles')
    return
  }

  console.log(`✨ Successfully applied LQIP styles to ${appliedCount} images`)
}

main().catch((error) => {
  console.error('❌ LQIP processing failed:', error)
  process.exit(1)
})
