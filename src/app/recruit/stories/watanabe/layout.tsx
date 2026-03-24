import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '渡邉 大輝の挑戦者ストーリー',
  description: '組織人からSing発起業へ転身。株式会社Sing.nexT代表・渡邉大輝が語る「覚悟が固まるのを待つ人生は、もうやめた」決断の物語。',
  alternates: {
    canonical: '/recruit/stories/watanabe',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
