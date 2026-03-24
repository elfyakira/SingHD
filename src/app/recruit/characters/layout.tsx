import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲間たち',
  description: 'Singホールディングスが求める4つの冒険者タイプ。勇者・戦士・賢者・僧侶、それぞれの特性と活躍するフィールドを紹介します。',
  alternates: {
    canonical: '/recruit/characters',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
