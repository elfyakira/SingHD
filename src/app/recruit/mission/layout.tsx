import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ミッション',
  description: 'Singホールディングスの企業理念・ビジョン・バリュー・社員憲章。「人生を、歌え。」に込めた想いと、挑戦する人を支える行動指針を紹介します。',
  alternates: {
    canonical: '/recruit/mission',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
