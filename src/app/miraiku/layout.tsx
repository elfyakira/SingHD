import type { Metadata } from 'next'
import { siteConfig } from '@/config/seo'

export const metadata: Metadata = {
  title: 'ミライク | 起業支援プログラム',
  description:
    '22〜35歳の起業志望者向け起業支援プログラム「ミライク」。事業設計から収益化まで伴走支援。本気で挑戦する人に、現実的な仕組みと環境を提供します。',
  alternates: {
    canonical: '/miraiku',
  },
  openGraph: {
    title: 'ミライク | 起業支援プログラム',
    description:
      '22〜35歳の起業志望者向け起業支援プログラム「ミライク」。事業設計から収益化まで伴走支援。',
    url: `${siteConfig.siteUrl}/miraiku`,
    type: 'website',
  },
}

export default function MiraikuLayout({ children }: { children: React.ReactNode }) {
  return children
}
