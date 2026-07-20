import type { Language } from '@/i18n/config'
import { allLocales, base, defaultLocale } from '@/config'
import { getLangFromPath, getNextGlobalLang } from '@/i18n/lang'

/**
 * Get path to a specific tag page with language support
 *
 * @param tagName Tag name
 * @param lang Current language code
 * @returns Path to tag page
 */
export function getTagPath(tagName: string, lang: Language): string {
  const tagPath = lang === defaultLocale
    ? `/tags/${tagName}/`
    : `/${lang}/tags/${tagName}/`

  return base ? `${base}${tagPath}` : tagPath
}

/**
 * Get path to a specific post page with language support
 *
 * @param slug Post slug
 * @param lang Current language code
 * @returns Path to post page
 */
export function getPostPath(slug: string, lang: Language): string {
  const postPath = lang === defaultLocale
    ? `/posts/${slug}/`
    : `/${lang}/posts/${slug}/`

  return base ? `${base}${postPath}` : postPath
}

/**
 * Generate localized path based on current language
 *
 * @param path Path to localize
 * @param currentLang Current language code
 * @returns Localized path with language prefix
 */
export function getLocalizedPath(path: string, currentLang?: Language) {
  const normalizedPath = path.replace(/^\/|\/$/g, '')
  const lang = currentLang ?? getLangFromPath(path)

  const langPrefix = lang === defaultLocale ? '' : `/${lang}`
  const localizedPath = normalizedPath === ''
    ? `${langPrefix}/`
    : `${langPrefix}/${normalizedPath}/`

  return base ? `${base}${localizedPath}` : localizedPath
}

/**
 * Build path for next language
 *
 * @param currentPath Current page path
 * @param currentLang Current language code
 * @param nextLang Next language code to switch to
 * @returns Path for next language
 */
export function getNextLangPath(currentPath: string, currentLang: Language, nextLang: Language): string {
  const pathWithoutBase = base && currentPath.startsWith(base)
    ? currentPath.slice(base.length)
    : currentPath

  const pagePath = currentLang === defaultLocale
    ? pathWithoutBase
    : pathWithoutBase.replace(`/${currentLang}`, '')

  return getLocalizedPath(pagePath, nextLang)
}

/**
 * Get next language path from global language list
 *
 * @param currentPath Current page path
 * @returns Path for next supported language
 */
export function getNextGlobalLangPath(currentPath: string): string {
  const currentLang = getLangFromPath(currentPath)
  const nextLang = getNextGlobalLang(currentLang)
  return getNextLangPath(currentPath, currentLang, nextLang)
}

/**
 * Get next language path from supported language list
 *
 * @param currentPath Current page path
 * @param supportedLangs List of supported language codes
 * @returns Path for next supported language
 */
export function getNextSupportedLangPath(currentPath: string, supportedLangs: Language[]): string {
  if (supportedLangs.length === 0) {
    return getNextGlobalLangPath(currentPath)
  }

  // Sort supported languages by global priority
  const langPriority = new Map<Language, number>(
    allLocales.map((lang, index) => [lang, index]),
  )
  const sortedLangs = [...supportedLangs].sort(
    (a, b) => (langPriority.get(a) ?? 0) - (langPriority.get(b) ?? 0),
  )

  // Get current language and next in cycle
  const currentLang = getLangFromPath(currentPath)
  const currentIndex = sortedLangs.indexOf(currentLang)
  const nextLang = sortedLangs[(currentIndex + 1) % sortedLangs.length]

  return getNextLangPath(currentPath, currentLang, nextLang)
}
