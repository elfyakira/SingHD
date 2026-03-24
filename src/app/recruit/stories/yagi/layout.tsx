import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '屋宜 勝正の挑戦者ストーリー',
  description: '会社員の閉塞感から「社長をやりませんか？」の一言で人生が変わった。株式会社フライトップ代表・屋宜勝正が語る「逃げない選択が、人生を変える」物語。',
  alternates: {
    canonical: '/recruit/stories/yagi',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
