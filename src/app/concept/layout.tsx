import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.concept.title,
  description: pageSeo.concept.description,
  alternates: {
    canonical: '/concept',
  },
}

export default function ConceptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
