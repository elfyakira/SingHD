import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { getInterviewBySlug } from '@/data/interviews'
import { generateInterviewSchemas } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

const title = '清水 駿之介の挑戦者ストーリー'
const description = '経営者として歩んできた道からSing共同創業へ。株式会社Sing代表取締役会長・清水駿之介が語る「仲間と共に、日本に新しい風を起こし続ける」物語。'
const image = '/img/miraiku/partner-shimishun.jpg'
const path = '/recruit/stories/shimishun'

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
const person = getInterviewBySlug('shimishun')!
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
