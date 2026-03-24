import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '飯田 思遠の挑戦者ストーリー',
  description: '大学を休学し、個人事業から起業へ。株式会社ゆめスタ代表・飯田思遠が語る「自分の意思で未来を選び続ける」挑戦の軌跡。',
  alternates: {
    canonical: '/recruit/stories/iida',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
