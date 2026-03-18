import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.company.title,
  description: pageSeo.company.description,
  alternates: {
    canonical: '/company',
  },
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
