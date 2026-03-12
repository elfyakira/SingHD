import type { Metadata } from 'next'
import { pageSeo } from '@/config/seo'

export const metadata: Metadata = {
  title: pageSeo.miraiku.title,
  description: pageSeo.miraiku.description,
}

export default function MiraikuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
