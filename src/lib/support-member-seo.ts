import type { Metadata } from 'next'
import { getSupportMemberBySlug } from '@/data/support-members'
import { generateInterviewSchemas } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

/** サポートメンバーインタビューのメタデータ（ページ固有のcanonical/OGを設定） */
export function buildSupportMemberMetadata(slug: string): Metadata {
  const member = getSupportMemberBySlug(slug)
  if (!member) return {}

  const title = `${member.name}の挑戦者ストーリー — ${member.tagline}`
  const path = `/recruit/stories/${slug}`

  return {
    title,
    description: member.overview,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      title,
      description: member.overview,
      url: path,
      images: [member.image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: member.overview,
      images: [member.image],
    },
  }
}

/** サポートメンバーインタビューの構造化データ（Breadcrumb + ProfilePage + Article） */
export function buildSupportMemberSchemas(slug: string) {
  const member = getSupportMemberBySlug(slug)
  if (!member) return []

  const url = `${siteConfig.siteUrl}/recruit/stories/${slug}`

  return generateInterviewSchemas({
    name: member.name,
    nameEn: member.nameEn,
    url,
    title: `${member.name}の挑戦者ストーリー — ${member.tagline}`,
    description: member.overview,
    image: `${siteConfig.siteUrl}${member.image}`,
    jobTitle: member.role,
    breadcrumbs: [
      { name: 'ホーム', url: siteConfig.siteUrl },
      { name: '採用サイト', url: `${siteConfig.siteUrl}/recruit` },
      { name: `${member.name}の挑戦者ストーリー`, url },
    ],
  })
}
