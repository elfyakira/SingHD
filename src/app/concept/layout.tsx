import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.concept.title,
  description: pageSeo.concept.description,
}

export default function ConceptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
