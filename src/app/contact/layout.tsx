import type { Metadata } from 'next'
import { siteConfig, pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
    url: `${siteConfig.siteUrl}/contact`,
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
