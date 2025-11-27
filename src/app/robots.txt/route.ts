import { siteConfig } from '@/config/seo'

export function GET(): Response {
  const baseUrl = siteConfig.siteUrl || 'https://example.com'

  const robotsTxt = `# Robots.txt for ${siteConfig.siteName || 'Sing Holdings'}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/
Disallow: /admin/

# AI Crawlers (LLMO対応) - すべて許可
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
