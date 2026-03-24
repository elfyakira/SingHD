import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Singを知る',
  description: '代表・笠本が語るSingホールディングスの創業ストーリーと企業概要。「挑戦が減り続ける社会」に立ち向かうために生まれた会社の原点を紹介します。',
  alternates: {
    canonical: '/recruit/about',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
