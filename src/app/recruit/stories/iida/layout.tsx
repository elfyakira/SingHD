import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { getInterviewBySlug } from '@/data/interviews'
import { generateInterviewSchemas } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

const title = '飯田 思遠の挑戦者ストーリー'
const description = '大学を休学し、個人事業から起業へ。株式会社ゆめスタ代表・飯田思遠が語る「自分の意思で未来を選び続ける」挑戦の軌跡。'
const image = '/img/recruit/stories/iida-portrait.png'
const path = '/recruit/stories/iida'

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
const person = getInterviewBySlug('shion')!
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
