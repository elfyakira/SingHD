import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/StructuredData'
import { interviews, getInterviewBySlug } from '@/data/interviews'
import { generateInterviewSchemas } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

interface Props {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return interviews.map((interview) => ({ slug: interview.slug }))
}

export const dynamicParams = false

function buildTitle(name: string, company?: string, role?: string) {
  const position = [company, role].filter(Boolean).join(' ')
  return `${name}${position ? `（${position}）` : ''}インタビュー`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const interview = getInterviewBySlug(slug)
  if (!interview) return {}

  const title = `${buildTitle(interview.name, interview.company, interview.role)} | ミライク`
  const description = interview.overview

  return {
    title,
    description,
    alternates: {
      canonical: `/miraiku/interview/${slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/miraiku/interview/${slug}`,
      images: [interview.portraitImage || interview.image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [interview.portraitImage || interview.image],
    },
  }
}

export default async function InterviewLayout({ children, params }: Props) {
  const { slug } = await params
  const interview = getInterviewBySlug(slug)
  if (!interview) notFound()

  const url = `${siteConfig.siteUrl}/miraiku/interview/${slug}`
  const title = buildTitle(interview.name, interview.company, interview.role)
  const companyUrl = siteConfig.groupCompanies.find(
    (c) => c.name === interview.company
  )?.website

  const schemas = generateInterviewSchemas({
    name: interview.name,
    nameEn: interview.nameEn,
    url,
    title: `${title} — ${interview.tagline}`,
    description: interview.overview,
    image: `${siteConfig.siteUrl}${interview.portraitImage || interview.image}`,
    jobTitle: interview.role,
    company: interview.company,
    companyUrl,
    breadcrumbs: [
      { name: 'ホーム', url: siteConfig.siteUrl },
      { name: 'ミライク', url: `${siteConfig.siteUrl}/miraiku` },
      { name: `${interview.name}インタビュー`, url },
    ],
  })

  return (
    <>
      <StructuredData data={schemas} />
      {children}
    </>
  )
}
