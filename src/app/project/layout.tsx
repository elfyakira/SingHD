import type { Metadata } from 'next'
import { siteConfig, pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.project.title,
  description: pageSeo.project.description,
  alternates: {
    canonical: '/project',
  },
  openGraph: {
    title: pageSeo.project.title,
    description: pageSeo.project.description,
    url: `${siteConfig.siteUrl}/project`,
    type: 'website',
  },
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children
}
