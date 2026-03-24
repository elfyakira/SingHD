import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGuideArticle, getAllGuideSlugs, renderMarkdown } from '@/lib/guide-loader'
import GuideArticleContent from './GuideArticleContent'
import StructuredData from '@/components/StructuredData'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getGuideArticle(slug)
  if (!article) return {}

  return {
    title: `${article.title} | 冒険者ガイド | Sing RECRUIT`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `/recruit/guide/${slug}`,
    },
  }
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getGuideArticle(slug)
  if (!article) notFound()

  const htmlContent = renderMarkdown(article.content)

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl },
      { name: '冒険者ガイド', url: `${siteConfig.siteUrl}/recruit/guide` },
      { name: article.title, url: `${siteConfig.siteUrl}/recruit/guide/${slug}` },
    ]),
    generateArticleSchema({
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.siteUrl}/recruit/guide/${slug}`,
      datePublished: article.date,
      image: `${siteConfig.siteUrl}${article.image}`,
    }),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <GuideArticleContent
        title={article.title}
        date={article.date}
        category={article.category}
        tags={article.tags}
        readingTime={article.readingTime}
        image={article.image}
        htmlContent={htmlContent}
      />
    </>
  )
}
