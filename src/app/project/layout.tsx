import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.project.title,
  description: pageSeo.project.description,
  alternates: {
    canonical: '/project',
  },
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
