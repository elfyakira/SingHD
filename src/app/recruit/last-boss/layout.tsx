import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ラスボス',
  description: 'Singホールディングスが立ち向かうラスボス「挑戦が減り続ける社会」。代表・笠本からのメッセージと、この戦いに挑む理由を語ります。',
  alternates: {
    canonical: '/recruit/last-boss',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
