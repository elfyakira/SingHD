import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '冒険マップ',
  description: 'Singホールディングスのキャリアパスを冒険マップで視覚化。Lv.1の入社からLv.100の事業責任者まで、あなたの成長ルートを確認できます。',
  alternates: {
    canonical: '/recruit/adventure-map',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
