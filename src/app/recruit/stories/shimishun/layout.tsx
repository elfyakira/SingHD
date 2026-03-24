import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '清水 駿之介の挑戦者ストーリー',
  description: '経営者として歩んできた道からSing共同創業へ。株式会社Sing代表取締役会長・清水駿之介が語る「仲間と共に、日本に新しい風を起こし続ける」物語。',
  alternates: {
    canonical: '/recruit/stories/shimishun',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
