import type { Metadata } from 'next'
import RecruitShell from '@/components/recruit/RecruitShell'

export const metadata: Metadata = {
  title: '採用サイト | 人生を、歌え。',
  description: 'Singホールディングス採用サイト。人生を本気で生きる仲間を募集しています。挑戦する人が集まる場所で、あなたの冒険を始めませんか。',
  keywords: ['Singホールディングス', '採用', '求人', 'ミライク', '起業支援', '愛知', '名古屋', '新卒', '第二新卒'],
  openGraph: {
    title: '採用サイト | 人生を、歌え。 | Singホールディングス',
    description: '人生を本気で生きる仲間を募集しています。挑戦する人が集まる場所で、あなたの冒険を始めませんか。',
    type: 'website',
  },
  alternates: {
    canonical: '/miraiku/recruit',
  },
}

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecruitShell>{children}</RecruitShell>
}
