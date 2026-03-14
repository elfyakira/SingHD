import type { Metadata } from 'next'
import { siteConfig, pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.concept.title,
  description: pageSeo.concept.description,
  alternates: {
    canonical: '/concept',
  },
  openGraph: {
    title: pageSeo.concept.title,
    description: pageSeo.concept.description,
    url: `${siteConfig.siteUrl}/concept`,
    type: 'website',
  },
}

export default function ConceptLayout({ children }: { children: React.ReactNode }) {
  return children
}
