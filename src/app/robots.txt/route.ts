import { siteConfig } from '@/config/seo'

export function GET(): Response {
  const baseUrl = siteConfig.siteUrl || 'https://example.com'

  const robotsTxt = `# Robots.txt - ${siteConfig.siteName || 'Sing Holdings'}
# ${baseUrl}

User-agent: *
Allow: /
Disallow: /api/

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

User-agent: Amazonbot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
