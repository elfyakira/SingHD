import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.news.title,
  description: pageSeo.news.description,
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
