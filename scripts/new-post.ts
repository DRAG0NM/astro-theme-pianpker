/**
 * Create a new post with frontmatter
 * Usage: pnpm new-post "English Article Title" [lang] [category]
 * Example: pnpm new-post "Quiet Summer Night" zh articles
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, sep } from 'node:path'
import process from 'node:process'
import { allLocales, defaultLocale, themeConfig } from '../src/config'

const englishTitle = process.argv[2]?.trim() || 'New Post'
const lang = process.argv[3]?.trim() || defaultLocale
const category = process.argv[4]?.trim() || 'articles'

if (!allLocales.includes(lang as typeof allLocales[number])) {
  console.error(`❌ Unsupported language: ${lang}. Use one of: ${allLocales.join(', ')}`)
  process.exit(1)
}

if (!/^[a-z0-9][a-z0-9-]*(?:[\\/][a-z0-9][a-z0-9-]*)*$/.test(category)) {
  console.error('❌ Category must contain only lowercase letters, numbers, hyphens, or safe path separators')
  process.exit(1)
}

const folderName = englishTitle.replace(/[<>:"/\\|?*]/g, '').trim()
const slug = englishTitle
  .normalize('NFKD')
  .replace(/[\u0300-\u036F]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

if (!folderName || !slug) {
  console.error('❌ English title must contain at least one Latin letter or number')
  process.exit(1)
}

const contentRoot = resolve('src/content/posts')
const targetFile = `${slug}-${lang}.md`
const fullPath = resolve(contentRoot, category, folderName, targetFile)

if (!fullPath.startsWith(`${contentRoot}${sep}`)) {
  console.error('❌ Refusing to create a post outside src/content/posts')
  process.exit(1)
}

// Check if file already exists
if (existsSync(fullPath)) {
  console.error(`❌ File already exists: ${fullPath}`)
  process.exit(1)
}

// Create the category and English-title directory structure
mkdirSync(resolve(contentRoot, category, folderName), { recursive: true })

// Prepare file content
const content = `---
title: ${JSON.stringify(englishTitle)}
published: ${new Date().toISOString()}
description: ''
updated: ''
tags:
  - Tag
draft: false
pin: 0
toc: ${themeConfig.global.toc}
lang: ${lang}
abbrlink: ${slug}
---
`

// Write to file
try {
  writeFileSync(fullPath, content)
  console.log(`✅ Post created: ${fullPath}`)
}
catch (error) {
  console.error('❌ Failed to create post:', error)
  process.exit(1)
}
