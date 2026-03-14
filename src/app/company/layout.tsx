import type { Metadata } from 'next'
import { siteConfig, pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.company.title,
  description: pageSeo.company.description,
  alternates: {
    canonical: '/company',
  },
  openGraph: {
    title: pageSeo.company.title,
    description: pageSeo.company.description,
    url: `${siteConfig.siteUrl}/company`,
    type: 'website',
  },
}

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children
}
