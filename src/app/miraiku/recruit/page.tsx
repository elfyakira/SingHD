'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import { recruitChapters } from '@/data/recruit-chapters'

// 冒険の地図上で表示するタイトル（ターゲット目線）
const mapTitles: Record<string, string> = {
  'brand-story': '人生というRPG',
  founder: 'この会社を作った理由',
  letter: '子供たちへの手紙',
  'sing-name': 'Singという名前',
  mission: '私たちの目指す世界',
  'last-boss': 'ラスボス',
  'adventure-map': '冒険マップ',
  characters: '冒険者タイプ',
  oath: '冒険者の誓い',
  message: '未来の仲間へ',
  jobs: '冒険への参加方法',
}

const chapterDescriptions: Record<string, string> = {
  'brand-story': '人生は、ゲームに似ている。',
  founder: '社長はなぜこの会社を作ったのか',
  letter: '君たちが大きくなって...',
  'sing-name': 'なぜこの会社は「Sing」なのか',
  mission: '人生を歌える社会をつくる',
  'last-boss': '挑戦が減り続ける社会',
  'adventure-map': 'あなたのレベルアップの旅',
  characters: 'あなたはどのタイプ？',
  oath: 'Singで働く仲間の約束',
  message: '社長から未来の仲間へ',
  jobs: 'あなたの冒険を始めよう',
}

const cardImages: Record<string, string> = {
  'brand-story': '/img/recruit/about/brand-story.png',
  founder: '/img/recruit/about/founder-journey.png',
  letter: '/img/recruit/about/letter.png',
  'sing-name': '/img/recruit/about/sing-meaning.png',
  mission: '/img/recruit/about/mission.jpg',
  'last-boss': '/img/recruit/last-boss/boss-reveal.png',
  'adventure-map': '/img/recruit/adventure-map/level-1.png',
  characters: '/img/recruit/top/hero-party.png',
  oath: '/img/recruit/oath/oath-circle.jpg',
  message: '/img/recruit/entry/party-welcome.png',
  jobs: '/img/recruit/entry/open-door.jpg',
}

const phaseConfig = [
  { phase: 'hook' as const, number: '01', label: '物語のはじまり', color: '#EF4444' },
  { phase: 'empathy' as const, number: '02', label: 'なぜ冒険するのか', color: '#F59E0B' },
  { phase: 'growth' as const, number: '03', label: '冒険の世界', color: '#10B981' },
  { phase: 'apply' as const, number: '04', label: '冒険に出る', color: '#2563EB' },
]

const challengerStories = [
  {
    name: '渡邉 大輝',
    company: '株式会社Sing.nexT',
    role: '代表取締役',
    tagline: '覚悟が固まるのを待つ人生は、もうやめた。',
    href: '/miraiku/recruit/stories/watanabe',
    image: '/img/recruit/stories/watanabe-portrait.png',
  },
  {
    name: '飯田 思遠',
    company: '株式会社ゆめスタ',
    role: '代表取締役',
    tagline: '自分の意思で未来を選び続ける',
    href: '/miraiku/recruit/stories/iida',
    image: '/img/recruit/stories/iida-portrait.png',
  },
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

  const allChapters = recruitChapters.filter(
    (c) => c.id !== 'top' && c.id !== 'story-watanabe' && c.id !== 'story-iida'
  )
  const ch = (id: string) => allChapters.find((c) => c.id === id)!

  /* ---- カード描画ヘルパー ---- */

  // 横長カード（中央揃え・左右余白あり・パノラミック）
  const wideCard = (id: string, color: string) => {
    const c = ch(id)
    return (
      <div className="max-w-2xl mx-auto">
        <Link href={c.href} className="group block">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
            <div className="aspect-[16/5] relative overflow-hidden">
              <img
                src={cardImages[c.id]}
                alt={mapTitles[c.id] || c.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold" style={{ color }}>
                  {c.number}
                </span>
                <span className="text-[10px] tracking-widest text-gray-400">
                  {c.titleEn}
                </span>
              </div>
              <p className="text-sm font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
                {mapTitles[c.id] || c.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {chapterDescriptions[c.id] || ''}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  // 正方形カード（カード自体が正方形）
  const squareCard = (id: string, color: string) => {
    const c = ch(id)
    return (
      <Link href={c.href} className="group">
        <div className="aspect-square bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <img
              src={cardImages[c.id]}
              alt={mapTitles[c.id] || c.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
              {mapTitles[c.id] || c.title}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {chapterDescriptions[c.id] || ''}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  // 挑戦者ストーリーカード（正方形）
  const storyCard = (story: (typeof challengerStories)[number]) => (
    <Link href={story.href} className="group">
      <div className="aspect-square bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-[#2563EB]/10 transition-all duration-300 flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          <img
            src={story.image}
            alt={story.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 left-4">
            <span className="text-[10px] tracking-widest text-[#2563EB] font-bold bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
              CHALLENGER STORY
            </span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-base font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
            {story.name}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {story.company} {story.role}
          </p>
          <p
            className="text-sm text-[#1C2A44] mt-3"
            style={{ fontFamily: "'Yu Mincho', serif" }}
          >
            「{story.tagline}」
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[10px] text-gray-400 flex-shrink-0">
              LEVEL 1
            </span>
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full" />
            </div>
            <span className="text-[10px] text-[#10B981] font-bold flex-shrink-0">
              LEVEL 80+
            </span>
          </div>
        </div>
      </div>
    </Link>
  )

  // フェーズマイルストーン
  const milestone = (pc: (typeof phaseConfig)[number]) => (
    <div className="flex justify-center relative z-10">
      <div
        className="flex items-center gap-4 px-6 py-3 rounded-2xl border"
        style={{
          backgroundColor: `${pc.color}40`,
          borderColor: `${pc.color}40`,
        }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{
            backgroundColor: pc.color,
            boxShadow: `0 0 24px ${pc.color}50`,
          }}
        >
          {pc.number}
        </div>
        <div>
          <p
            className="text-[10px] tracking-[0.3em] uppercase font-bold"
            style={{ color: pc.color }}
          >
            PHASE {pc.number}
          </p>
          <p className="text-sm font-bold text-white">{pc.label}</p>
        </div>
      </div>
    </div>
  )

  // フェーズ間コネクター
  const connector = (_fromColor: string, toColor: string) => (
    <div className="flex justify-center py-8">
      <div
        className="w-0.5 h-16"
        style={{ backgroundColor: `${toColor}40` }}
      />
    </div>
  )

  // フェーズ内コネクター（単色）
  const line = (color: string) => (
    <div className="flex justify-center py-6">
      <div
        className="w-0.5 h-12"
        style={{ backgroundColor: `${color}40` }}
      />
    </div>
  )

  // セクションタイトル
  const sectionTitle = (text: string) => (
    <div className="text-center pt-6">
      <p
        className="text-lg font-bold text-white"
        style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
      >
        {text}
      </p>
    </div>
  )

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
              href="/miraiku/recruit/about#brand-story"
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

      {/* ===== Adventure Map ===== */}
      <section
        id="adventure-map"
        className="py-20 lg:py-32 px-4 bg-gray-800/50"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <FadeInUp>
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-gray-300 mb-4">
                Adventure Map
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                冒険の地図
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full" />
            </div>
          </FadeInUp>

          {/* Map — コネクター方式（ラインがボックスを通らない） */}
          <div>
            {/* START */}
            <FadeInUp>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-3 rounded-full">
                  <span className="text-white text-xs">▶</span>
                  <span className="text-xs font-bold text-white tracking-[0.2em]">
                    START
                  </span>
                </div>
              </div>
            </FadeInUp>

            {connector('#FFFFFF', phaseConfig[0].color)}

            {/* ===== Phase 01 — 物語のはじまり ===== */}
            <FadeInUp>
              <div>
                {milestone(phaseConfig[0])}
                {line(phaseConfig[0].color)}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: `${phaseConfig[0].color}40` }} />
                  {wideCard('brand-story', phaseConfig[0].color)}
                </div>
              </div>
            </FadeInUp>

            {connector(phaseConfig[0].color, phaseConfig[1].color)}

            {/* ===== Phase 02 — なぜ冒険するのか ===== */}
            <FadeInUp delay={120}>
              <div>
                {milestone(phaseConfig[1])}
                {line(phaseConfig[1].color)}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: `${phaseConfig[1].color}40` }} />
                  <div className="space-y-20">
                    {wideCard('founder', phaseConfig[1].color)}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      {squareCard('mission', phaseConfig[1].color)}
                      {squareCard('sing-name', phaseConfig[1].color)}
                    </div>
                    {wideCard('letter', phaseConfig[1].color)}
                  </div>
                </div>
              </div>
            </FadeInUp>

            {connector(phaseConfig[1].color, phaseConfig[2].color)}

            {/* ===== Phase 03 — 冒険の世界 ===== */}
            <FadeInUp delay={240}>
              <div>
                {milestone(phaseConfig[2])}
                {line(phaseConfig[2].color)}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: `${phaseConfig[2].color}40` }} />
                  <div className="space-y-20">
                    {wideCard('adventure-map', phaseConfig[2].color)}
                    {wideCard('oath', phaseConfig[2].color)}
                    {wideCard('characters', phaseConfig[2].color)}
                    <div className="text-center pt-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2">
                        Challenger Story
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-white/20" />
                        <p
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                        >
                          挑戦者のストーリー
                        </p>
                        <div className="w-12 h-px bg-white/20" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      {storyCard(challengerStories[0])}
                      {storyCard(challengerStories[1])}
                    </div>
                    <div className="text-center pt-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2">
                        Last Boss
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-white/20" />
                        <p
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                        >
                          私たちが挑む最大の敵
                        </p>
                        <div className="w-12 h-px bg-white/20" />
                      </div>
                    </div>
                    {wideCard('last-boss', phaseConfig[2].color)}
                  </div>
                </div>
              </div>
            </FadeInUp>

            {connector(phaseConfig[2].color, phaseConfig[3].color)}

            {/* ===== Phase 04 — 冒険に出る ===== */}
            <FadeInUp delay={360}>
              <div>
                {milestone(phaseConfig[3])}
                {line(phaseConfig[3].color)}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: `${phaseConfig[3].color}40` }} />
                  <div className="space-y-20">
                    {wideCard('message', phaseConfig[3].color)}
                    {wideCard('jobs', phaseConfig[3].color)}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white/70">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1C2A44] mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-12">
              あなたの物語を、ここから始めよう。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/miraiku/recruit/entry"
                className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider font-bold rounded-full hover:bg-[#D97706] transition-all duration-300 w-full sm:w-auto"
              >
                ▶ 冒険に参加する
              </Link>
              <Link
                href="/miraiku/recruit/about#brand-story"
                className="inline-block border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#2563EB]/5 transition-all duration-300 w-full sm:w-auto"
              >
                物語を最初から読む
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={300}>
            <Link
              href="/miraiku/recruit/diagnosis"
              className="inline-block text-sm text-[#2563EB] font-medium hover:underline"
            >
              冒険診断をする →
            </Link>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
