import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '人が辞めない会社には、理由がある。｜ カツヤク - 組織活性化プロジェクト',
  description:
    '離職率22%→9%。採用・定着・戦力化を現場で一緒につくる組織活性化プロジェクト「カツヤク」。中小企業の人財・組織課題を、現場伴走型で解決します。無料相談受付中。',
  keywords: [
    'カツヤク',
    '離職率 改善',
    '人材 定着 コンサル',
    '組織活性化 支援',
    '人材育成',
    '管理職研修',
    '中小企業 人材',
    '離職率 下げる',
    '人が辞めない会社',
    '現場伴走型',
  ],
  openGraph: {
    title: '人が辞めない会社には、理由がある。｜ カツヤク',
    description:
      '離職率22%→9%。採用・定着・戦力化を現場で一緒につくる組織活性化プロジェクト「カツヤク」。',
    type: 'website',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: '/katsuyaku',
  },
}

export default function KatsuyakuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        [class*="fixed"][class*="bottom-6"][class*="right-6"] {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  )
}
