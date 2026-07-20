import type { APIContext } from 'astro'
import { allLocales } from '@/config'
import { getLangRouteParam } from '@/i18n/lang'
import { generateRSS } from '@/utils/feed'

export function getStaticPaths() {
  return allLocales.map(lang => ({
    params: { lang: getLangRouteParam(lang) },
  }))
}

export async function GET(context: APIContext) {
  return generateRSS(context)
}
