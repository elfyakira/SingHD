'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'
import { recruitChapters } from '@/data/recruit-chapters'

const chapterDescriptions: Record<string, string> = {
  'brand-story': '人生は、ゲームに似ている。',
  founder: '私がこの冒険を始めた理由',
  letter: '君たちが大きくなって...',
  'sing-name': 'なぜこの会社は「Sing」なのか',
  mission: '人生を歌える社会をつくる',
  'last-boss': '挑戦が減り続ける社会',
  'adventure-map': 'あなたのレベルアップの旅',
  characters: 'RPGタイプ採用',
  oath: 'Singで働く仲間の約束',
  'story-watanabe': '挑戦者のリアルな成長',
  'story-iida': '挑戦者のリアルな成長',
  message: '社長から未来の仲間へ',
  jobs: 'あなたの冒険を始めよう',
}

const phaseConfig = [
  { phase: 'hook' as const, label: 'CHAPTER 1-2', sublabel: '感情を動かす' },
  { phase: 'empathy' as const, label: 'CHAPTER 3-6', sublabel: '共感' },
  { phase: 'growth' as const, label: 'CHAPTER 7-10', sublabel: '成長イメージ' },
  { phase: 'apply' as const, label: 'CHAPTER 11-13', sublabel: '応募' },
]

export default function RecruitTopPage() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const chaptersWithoutTop = recruitChapters.filter((c) => c.id !== 'top')

  return (
    <div className="min-h-screen text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Full-screen Hero ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-800/60">
        <div className="relative z-10 text-center px-4">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-8">
              Sing Holdings Recruit
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12">
              人生は一度きりのRPG。
              <br />
              その物語をどう生きるかは、あなた次第。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <Link
              href="/miraiku/recruit/brand-story"
              className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
            >
              あなたの冒険をSingホールディングスで。
            </Link>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${
            scrollIndicatorVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white"
              style={{
                animation: 'scrollDown 1.5s ease-in-out infinite',
              }}
            />
          </div>
          <style jsx>{`
            @keyframes scrollDown {
              0% {
                transform: translateY(-100%);
              }
              50% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(100%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white/70">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-[#1C2A44] font-bold leading-loose mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたは、自分の人生の主人公を
              <br />
              生きていますか？
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              人生はRPGのようなものです。
              <br />
              敵に出会い、壁にぶつかり、仲間と出会いながら
              <br />
              少しずつ自分のレベルを上げていく。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              Singホールディングスは
              <br />
              そんな人生を本気で生きる人たちが集まる場所です。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
            </div>
            <p
              className="text-2xl md:text-3xl text-[#2563EB] font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              主人公になれ。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Chapter Map ===== */}
      <section className="py-20 lg:py-32 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
                Adventure Map
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                冒険の地図
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full" />
            </div>
          </FadeInUp>

          <div className="space-y-16">
            {phaseConfig.map((pc, phaseIdx) => {
              const chapters = chaptersWithoutTop.filter(
                (c) => c.phase === pc.phase
              )
              if (chapters.length === 0) return null
              return (
                <FadeInUp key={pc.phase} delay={phaseIdx * 100}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#2563EB]">
                        {pc.label}
                      </span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {chapters.map((chapter) => (
                        <Link
                          key={chapter.id}
                          href={chapter.href}
                          className="group block border-2 border-[#2563EB]/20 p-5 hover:border-[#2563EB] transition-all duration-300 bg-white rounded-2xl"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-[#2563EB] text-lg font-bold flex-shrink-0">
                              {chapter.number}
                            </span>
                            <div>
                              <p className="text-[#1C2A44] text-sm font-bold group-hover:text-[#2563EB] transition-colors">
                                {chapter.title}
                              </p>
                              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                                {chapterDescriptions[chapter.id] || ''}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white/70">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1C2A44] mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </h2>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/miraiku/recruit/brand-story"
                className="inline-block border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#2563EB]/5 transition-all duration-300 w-full sm:w-auto"
              >
                最初から読む
              </Link>
              <Link
                href="/miraiku/recruit/jobs"
                className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider font-bold rounded-full hover:bg-[#D97706] transition-all duration-300 w-full sm:w-auto"
              >
                募集要項を見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="top" />
      <RecruitCTA />
    </div>
  )
}
