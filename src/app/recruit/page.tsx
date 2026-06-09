'use client'

import { useState, useEffect, useRef } from 'react'
import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link'
import Image from '@/components/QImage'

const dotFont = Press_Start_2P({ weight: '400', subsets: ['latin'] })
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

// 地図上のナンバリング（表示順に上から、2カラムは左が先）
const mapNumbers: Record<string, string> = {
  'brand-story': '01',
  founder: '02',
  mission: '03',
  'sing-name': '04',
  letter: '05',
  'adventure-map': '06',
  oath: '07',
  characters: '08',
  'last-boss': '09',
  message: '10',
  jobs: '11',
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

const cardImagePositions: Record<string, string> = {
  oath: '50% 25%',
}

const phaseConfig = [
  { phase: 'hook' as const, number: '01', label: '物語のはじまり', color: '#EF4444' },
  { phase: 'empathy' as const, number: '02', label: 'なぜ冒険するのか', color: '#F59E0B' },
  { phase: 'growth' as const, number: '03', label: '冒険の世界', color: '#10B981' },
  { phase: 'apply' as const, number: '04', label: '冒険に出る', color: '#2563EB' },
]

const challengerStories: {
  name: string; company: string; role: string; tagline: string
  href: string; image: string; imagePosition?: string; imageScale?: number
  iconPosition?: string; iconScale?: number
}[] = [
  {
    name: '飯田 思遠',
    company: '株式会社ゆめスタ',
    role: '代表取締役',
    tagline: '自分の意思で未来を選び続ける',
    href: '/recruit/stories/iida',
    image: '/img/recruit/stories/iida-portrait.png',
    imagePosition: '50% -90%',
    imageScale: 1.3,
    iconPosition: '50% -60%',
    iconScale: 1.3,
  },
  {
    name: '屋宜 勝正',
    company: '株式会社フライトップ',
    role: '代表取締役',
    tagline: '逃げない選択が、人生を変える',
    href: '/recruit/stories/yagi',
    image: '/img/miraiku/partner-yagi.jpg',
    imagePosition: '50% 20%',
  },
  {
    name: '清水 駿之介',
    company: '株式会社Sing',
    role: '代表取締役会長',
    tagline: '仲間と共に、日本に新しい風を起こし続ける',
    href: '/recruit/stories/shimishun',
    image: '/img/miraiku/partner-shimishun.jpg',
    imagePosition: '50% 48%',
    iconPosition: '50% 70%',
  },
]

export default function RecruitTopPage() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true)
  const [storySetWidth, setStorySetWidth] = useState(0)
  const storyTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // CSS animation用: 1セット分の幅を計測
  useEffect(() => {
    const track = storyTrackRef.current
    if (!track) return
    const measure = () => {
      const halfCount = challengerStories.length
      const resetChild = track.children[halfCount] as HTMLElement
      if (resetChild) setStorySetWidth(resetChild.offsetLeft)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const allChapters = recruitChapters.filter(
    (c) => c.id !== 'top' && c.id !== 'story-iida'
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
              <Image
                src={cardImages[c.id]}
                alt={mapTitles[c.id] || c.title}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
                style={cardImagePositions[c.id] ? { objectPosition: cardImagePositions[c.id] } : undefined}
              />
            </div>
            <div className="px-5 py-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold" style={{ color }}>
                  {mapNumbers[c.id] || c.number}
                </span>
                <span className="text-xs tracking-widest text-gray-400">
                  {c.titleEn}
                </span>
              </div>
              <p className="text-base md:text-lg font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
                {mapTitles[c.id] || c.title}
              </p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
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
            <Image
              src={cardImages[c.id]}
              alt={mapTitles[c.id] || c.title}
              fill
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold" style={{ color }}>
                {mapNumbers[c.id] || c.number}
              </span>
              <span className="text-xs tracking-widest text-gray-400">
                {c.titleEn}
              </span>
            </div>
            <p className="text-base font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
              {mapTitles[c.id] || c.title}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {chapterDescriptions[c.id] || ''}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  // 挑戦者ストーリーカード
  const storyCard = (story: (typeof challengerStories)[number]) => (
    <Link href={story.href} className="group">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#2563EB]/20 hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-[#2563EB]/10 transition-all duration-300">
        <div className="relative overflow-hidden h-[160px] md:h-[180px]">
          <Image
            src={story.image}
            alt={story.name}
            fill
            sizes="300px"
            className="object-cover"
            style={{ objectPosition: story.imagePosition || '50% 30%', transform: story.imageScale ? `scale(${story.imageScale})` : undefined }}
          />
          <div className="absolute top-2 left-3">
            <span className="text-[10px] tracking-widest text-[#2563EB] font-bold bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
              CHALLENGER STORY
            </span>
          </div>
        </div>
        <div className="p-4 h-[155px] flex flex-col">
          <p className="text-base font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
            {story.name}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {story.company} {story.role}
          </p>
          <p
            className="text-sm text-[#1C2A44] mt-3 line-clamp-2"
            style={{ fontFamily: "'Yu Mincho', serif" }}
          >
            「{story.tagline}」
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <span className={`text-[10px] text-[#1C2A44]/70 flex-shrink-0 ${dotFont.className}`}>
              Lv.1
            </span>
            <div className="flex-1 h-5 border-2 border-[#1C2A44]/50 rounded-sm p-[1px] bg-white">
              <div className="h-full w-4/5 bg-gradient-to-r from-[#93C5FD] via-[#3B82F6] to-[#2563EB] rounded-r-[2px]" />
            </div>
            <span className={`text-[10px] text-[#1D4ED8] font-bold flex-shrink-0 ${dotFont.className}`}>
              MAX+
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
            <p className="text-xs tracking-[0.4em] text-white mb-8">
              Sing HOLDINGS RECRUIT
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
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
              人生は一度きりのRPG。
              <br />
              その物語をどう生きるかは、あなた次第。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <Link
              href="/recruit/entry"
              className="inline-block bg-[#F59E0B] text-white px-12 py-5 text-xl md:text-2xl tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
            >
              ▶ 冒険に参加する
            </Link>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${
            scrollIndicatorVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white">
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
              className="text-2xl md:text-3xl lg:text-4xl text-[#1C2A44] font-bold leading-loose mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたは、自分の人生の主人公を
              <br />
              生きていますか？
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-base md:text-xl font-bold mb-8">
              人生はRPGのようなものです。
              <br />
              敵に出会い、壁にぶつかり、仲間と出会いながら
              <br />
              少しずつ自分のレベルを上げていく。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-base md:text-xl font-bold mb-12">
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
                <div className="flex items-center gap-3 bg-white/10 border border-white/10 px-8 py-4 rounded-full">
                  <span className="text-white text-base">▶</span>
                  <span className="text-base font-bold text-white tracking-[0.3em]">
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
                    {(() => {
                      const c = ch('adventure-map')
                      return (
                        <div className="max-w-2xl mx-auto">
                          <Link href={c.href} className="group block">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
                              <div className="aspect-[16/5] relative overflow-hidden">
                                <Image
                                  src={cardImages[c.id]}
                                  alt={mapTitles[c.id] || c.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 640px"
                                  className="object-cover"
                                  style={{ objectPosition: '50% 20%' }}
                                />
                              </div>
                              <div className="px-5 py-5">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-bold" style={{ color: phaseConfig[2].color }}>
                                    {mapNumbers[c.id] || c.number}
                                  </span>
                                  <span className="text-xs tracking-widest text-gray-400">
                                    {c.titleEn}
                                  </span>
                                </div>
                                <p className="text-base md:text-lg font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors">
                                  {mapTitles[c.id] || c.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                  {chapterDescriptions[c.id] || ''}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                    })()}
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
                    {/* Story Slider — CSS animation無限ループ */}
                    <div className="overflow-hidden relative left-1/2 -translate-x-1/2 w-screen group/slider">
                      <style>{`
                        @keyframes storyScroll {
                          from { transform: translateX(0); }
                          to { transform: translateX(-${storySetWidth}px); }
                        }
                      `}</style>
                      <div
                        ref={storyTrackRef}
                        className="flex gap-6 will-change-transform group-hover/slider:[animation-play-state:paused]"
                        style={storySetWidth > 0 ? {
                          animation: `storyScroll ${storySetWidth / 30}s linear infinite`,
                        } : undefined}
                      >
                        {[...challengerStories, ...challengerStories].map((story, i) => (
                          <div key={`${story.name}-${i}`} className="flex-shrink-0 w-[260px] md:w-[300px]">
                            {storyCard(story)}
                          </div>
                        ))}
                      </div>
                      {/* 4人の顔アイコン */}
                      <div className="flex justify-center gap-6 mt-5">
                      {challengerStories.map((story) => (
                        <Link key={story.name} href={story.href} className="group/face flex flex-col items-center gap-1.5">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/30 group-hover/face:border-[#2563EB] transition-colors relative">
                            <Image
                              src={story.image}
                              alt={story.name}
                              fill
                              sizes="192px"
                              className="object-cover"
                              style={{
                                objectPosition: story.iconPosition || story.imagePosition || '50% 30%',
                                transform: story.iconScale ? `scale(${story.iconScale})` : undefined,
                              }}
                            />
                          </div>
                          <span className="text-base text-white/70 group-hover/face:text-white transition-colors font-bold">
                            {story.name.split(' ')[0]}
                          </span>
                        </Link>
                      ))}
                      </div>
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


      <RecruitCTA />
    </div>
  )
}
