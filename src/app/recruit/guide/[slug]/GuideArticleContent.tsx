'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'
import Image from '@/components/QImage'
import { ArrowLeft, BookOpen, Clock } from 'lucide-react'

interface Props {
  title: string
  date: string
  category: string
  tags: string[]
  readingTime: string
  image: string
  htmlContent: string
}

export default function GuideArticleContent({
  title,
  date,
  category,
  tags,
  readingTime,
  image,
  htmlContent,
}: Props) {
  return (
    <>
      <RecruitHeader />

      <article className="pt-20 pb-16">
        <div className="max-w-3xl md:max-w-5xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur rounded-2xl px-6 md:px-16 lg:px-24 py-8 mt-8">
            {/* Header */}
            <header className="pb-6">
              <FadeInUp>
                <Link
                  href="/recruit/guide"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#2563EB] mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  冒険者ガイド
                </Link>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
                    {category}
                  </span>
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4 leading-tight"
                  style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
                >
                  {title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <time dateTime={date}>{date}</time>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {readingTime}
                  </span>
                </div>
              </FadeInUp>
            </header>

            {/* Featured Image */}
            {image && (
              <div className="mb-10">
                <FadeInUp delay={0.1}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                    />
                  </div>
                </FadeInUp>
              </div>
            )}

            {/* Content */}
            <div>
              <FadeInUp delay={0.2}>
                <div
                  className="prose-sing"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </FadeInUp>
            </div>

            {/* Navigation */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-gray-200 pt-8">
                <Link
                  href="/recruit/guide"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2563EB] font-medium transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  冒険者ガイド一覧に戻る
                </Link>
                <Link
                  href="/recruit/diagnosis"
                  className="inline-flex items-center gap-2 text-sm text-[#D97706] hover:text-[#B45309] font-medium transition-colors"
                >
                  冒険診断を受ける
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <RecruitCTA />
    </>
  )
}
