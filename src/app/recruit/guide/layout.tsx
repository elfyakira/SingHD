import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '冒険者ガイド',
  description: '20代のキャリアに役立つ冒険者ガイド。挑戦・スキル・チームビルディングなど、仕事と人生をレベルアップさせるヒントをRPG風にお届けします。',
  alternates: {
    canonical: '/recruit/guide',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
