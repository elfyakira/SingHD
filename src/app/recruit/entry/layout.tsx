import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'エントリー',
  description: 'Singホールディングスの採用応募ページ。募集要項の確認とエントリーはこちらから。新卒・第二新卒・中途採用を受け付けています。',
  alternates: {
    canonical: '/recruit/entry',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
