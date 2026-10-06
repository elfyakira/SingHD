import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getNewsBySlug, getAllSlugs } from '@/lib/news'
import StructuredData from '@/components/StructuredData'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

/** 本文HTMLから先頭120文字程度を抜き出してdescriptionに使う */
function toDescription(html: string, fallback: string) {
  const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  if (!text) return fallback
  return text.length > 120 ? `${text.slice(0, 120)}…` : text
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getNewsBySlug(slug)
  if (!article) return { title: 'ニュース' }
  const description = toDescription(
    article.contentHtml,
    `${article.title} - Singホールディングスからのお知らせ`
  )
  return {
    title: article.title,
    description,
    alternates: {
      canonical: `/news/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description,
      url: `/news/${slug}`,
      publishedTime: article.date,
    },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getNewsBySlug(slug)

  if (!article) notFound()

  const url = `${siteConfig.siteUrl}/news/${slug}`
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl },
      { name: 'ニュース', url: `${siteConfig.siteUrl}/news` },
      { name: article.title, url },
    ]),
    generateArticleSchema({
      title: article.title,
      description: toDescription(article.contentHtml, article.title),
      url,
      datePublished: article.date,
      section: article.category,
    }),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {/* 戻るリンク */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1C2A44] transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              ニュース一覧へ戻る
            </Link>

            {/* ヘッダー */}
            <div className="mb-10 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-500 text-sm">{article.date}</span>
                <span className="px-3 py-1 bg-[#1C2A44] text-white text-xs">
                  {article.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {article.title}
              </h1>
            </div>

            {/* 本文 */}
            <div
              className="news-body"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
