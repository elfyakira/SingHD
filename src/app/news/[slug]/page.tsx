import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getNewsBySlug, getAllSlugs } from '@/lib/news'

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
  return {
    title: article.title,
    description: `${article.title} - Singホールディングスからのお知らせ`,
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

  return (
    <>
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
