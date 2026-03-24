import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '冒険者タイプ診断',
  description: '5つの質問であなたの冒険者タイプを診断。勇者・戦士・賢者・僧侶、あなたはどのタイプ？自分の強みと活躍できるフィールドがわかります。',
  alternates: {
    canonical: '/recruit/diagnosis',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
