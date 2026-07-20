import type { APIRoute } from 'astro'
import { base } from '@/config'

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    `Disallow: ${base}/~partytown/`,
    '',
    `Sitemap: ${sitemapURL.href}`,
  ].join('\n')

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
