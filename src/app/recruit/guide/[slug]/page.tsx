import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGuideArticle, getAllGuideSlugs, renderMarkdown } from '@/lib/guide-loader'
import GuideArticleContent from './GuideArticleContent'

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
  }
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getGuideArticle(slug)
  if (!article) notFound()

  const htmlContent = renderMarkdown(article.content)

  return (
    <GuideArticleContent
      title={article.title}
      date={article.date}
      category={article.category}
      tags={article.tags}
      readingTime={article.readingTime}
      image={article.image}
      htmlContent={htmlContent}
    />
  )
}
