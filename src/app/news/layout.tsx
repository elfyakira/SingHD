import type { Metadata } from 'next'
import { siteConfig, pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.news.title,
  description: pageSeo.news.description,
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: pageSeo.news.title,
    description: pageSeo.news.description,
    url: `${siteConfig.siteUrl}/news`,
    type: 'website',
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
