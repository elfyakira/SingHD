import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '冒険者の誓い',
  description: 'Singホールディングスの冒険者の誓い。「本気で生きろ」「失敗を恐れるな」など、全メンバーが共有する6つの行動指針を紹介します。',
  alternates: {
    canonical: '/recruit/oath',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
