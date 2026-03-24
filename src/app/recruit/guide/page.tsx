'use client'

import { useState } from 'react'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'
import Image from '@/components/QImage'
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
      {/* 全体オーバーレイ */}
      <div className="fixed inset-0 bg-[#1C2A44]/40 pointer-events-none z-[-1]" />

      <RecruitHeader />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 text-center">
        <div className="absolute inset-0 bg-[#1C2A44]/75" />
        <div className="relative">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6">
              <BookOpen className="w-4 h-4" />
              ADVENTURER&apos;S GUIDE
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
            >
              冒険者ガイド
            </h1>
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
              これから冒険を始めるあなたに贈る、先輩冒険者たちの知恵と経験。
              <br />
              挑戦と成長のヒントがここにあります。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pt-8 pb-4">
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
          <div className="text-center mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">
              Explore More
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-white/20" />
              <p
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
              >
                もっと冒険の世界を知る
              </p>
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 冒険マップ */}
            <Link href="/recruit/adventure-map" className="group">
              <div className="bg-white/80 backdrop-blur rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200 flex h-full">
                <div className="relative w-1/3 flex-shrink-0">
                  <Image
                    src="/img/recruit/adventure-map/level-1.png"
                    alt="冒険マップ"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <p className="text-sm md:text-base font-bold tracking-wider text-[#2563EB] mb-1">冒険マップ</p>
                  <p className="text-sm font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors mb-1">
                    Singで歩む成長の道筋
                  </p>
                  <p className="text-xs text-gray-500">Lv.1からLv.100までのキャリアパス</p>
                </div>
              </div>
            </Link>

            {/* 冒険診断 */}
            <Link href="/recruit/diagnosis" className="group">
              <div className="bg-white/80 backdrop-blur rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200 flex h-full">
                <div className="relative w-1/3 flex-shrink-0">
                  <Image
                    src="/img/recruit/top/hero-party.png"
                    alt="冒険診断"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <p className="text-sm md:text-base font-bold tracking-wider text-[#D97706] mb-1">冒険診断</p>
                  <p className="text-sm font-bold text-[#1C2A44] group-hover:text-[#D97706] transition-colors mb-1">
                    あなたは勇者？戦士？魔法使い？僧侶？
                  </p>
                  <p className="text-xs text-gray-500">5問であなたの冒険者タイプがわかる</p>
                </div>
              </div>
            </Link>
          </div>
        </FadeInUp>
      </section>

      <RecruitCTA />
    </>
  )
}
