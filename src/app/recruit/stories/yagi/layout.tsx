import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { getInterviewBySlug } from '@/data/interviews'
import { generateInterviewSchemas } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

const title = '屋宜 勝正の挑戦者ストーリー'
const description = '会社員の閉塞感から「社長をやりませんか？」の一言で人生が変わった。株式会社フライトップ代表・屋宜勝正が語る「逃げない選択が、人生を変える」物語。'
const image = '/img/miraiku/partner-yagi.jpg'
const path = '/recruit/stories/yagi'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'article',
    title,
    description,
    url: path,
    images: [image],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
}

// 人物情報はミライクのインタビューデータと共通
const person = getInterviewBySlug('yagi')!
const url = `${siteConfig.siteUrl}${path}`
const schemas = generateInterviewSchemas({
  name: person.name,
  nameEn: person.nameEn,
  url,
  title,
  description,
  image: `${siteConfig.siteUrl}${image}`,
  jobTitle: person.role,
  company: person.company,
  companyUrl: siteConfig.groupCompanies.find((c) => c.name === person.company)?.website,
  breadcrumbs: [
    { name: 'ホーム', url: siteConfig.siteUrl },
    { name: '採用サイト', url: `${siteConfig.siteUrl}/recruit` },
    { name: title, url },
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData data={schemas} />
      {children}
    </>
  )
}
