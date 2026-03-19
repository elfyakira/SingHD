'use client'

import { useState } from 'react'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, ChevronRight, ArrowRight } from 'lucide-react'
import { guideArticles, GUIDE_CATEGORIES, categoryMeta, type GuideCategory } from './guide-data'

const FILTER_ALL = 'すべて'

export default function GuidePage() {
  const [filter, setFilter] = useState<string>(FILTER_ALL)

  const filtered = filter === FILTER_ALL
    ? guideArticles
    : guideArticles.filter((a) => a.category === filter)

  return (
    <>
      <RecruitHeader />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 text-center">
        <FadeInUp>
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6">
            <BookOpen className="w-4 h-4" />
            ADVENTURER&apos;S GUIDE
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
            style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
          >
            冒険者ガイド
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            これから冒険を始めるあなたに贈る、先輩冒険者たちの知恵と経験。
            <br />
            挑戦と成長のヒントがここにあります。
          </p>
        </FadeInUp>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter(FILTER_ALL)}
            className={`text-xs font-bold rounded-full px-4 py-2 transition-colors ${
              filter === FILTER_ALL
                ? 'bg-[#2563EB] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {FILTER_ALL}
          </button>
          {GUIDE_CATEGORIES.map((cat) => {
            const meta = categoryMeta[cat]
            const active = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold rounded-full px-4 py-2 transition-colors ${
                  active
                    ? `${meta.pill} ring-2 ring-current/20`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </section>

      {/* Article Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((article) => {
                const meta = categoryMeta[article.category as GuideCategory]
                const isAvailable = article.available !== false

                const Card = (
                  <div className="bg-white/80 backdrop-blur rounded-xl overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-lg transition-all duration-200 group">
                    {/* Thumbnail */}
                    <div className={`relative aspect-[3/2] ${meta?.bg ?? 'bg-gray-50'}`}>
                      {article.image ? (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-gray-300" />
                        </div>
                      )}
                      {!isAvailable && (
                        <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                          <span className="text-[10px] font-bold tracking-wider text-gray-400 bg-white/90 px-3 py-1 rounded-full">
                            COMING SOON
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[9px] sm:text-[10px] rounded-full px-1.5 py-0.5 ${meta?.pill ?? 'bg-gray-100 text-gray-600'}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-bold text-sm text-[#1C2A44] group-hover:text-[#2563EB] transition-colors mb-1 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-xs text-gray-500 leading-snug line-clamp-2 flex-1">
                        {article.desc}
                      </p>
                      {isAvailable && (
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-[#2563EB] font-medium">
                          読む <ChevronRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                )

                return isAvailable ? (
                  <Link key={article.slug} href={`/recruit/guide/${article.slug}`}>
                    {Card}
                  </Link>
                ) : (
                  <div key={article.slug} className="cursor-default">
                    {Card}
                  </div>
                )
              })}
            </div>
          </FadeInUp>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">このカテゴリのコンテンツは準備中です</p>
          )}
        </div>
      </section>

      {/* Cross-links */}
      <section className="px-4 pb-16">
        <FadeInUp delay={0.2}>
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur rounded-2xl border border-gray-200 p-8 text-center">
            <p
              className="text-lg font-bold text-[#1C2A44] mb-4"
              style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
            >
              もっと冒険の世界を知る
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/recruit/stories/watanabe"
                className="inline-flex items-center gap-2 text-sm text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                挑戦者ストーリーを読む <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/recruit/diagnosis"
                className="inline-flex items-center gap-2 text-sm text-[#D97706] hover:text-[#B45309] font-medium transition-colors"
              >
                冒険診断を受ける <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>

      <RecruitCTA />
    </>
  )
}
