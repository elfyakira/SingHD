'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FadeInUp from '@/components/animations/FadeInUp'
import StaggerContainer from '@/components/animations/StaggerContainer'
import SectionTitleEntrance from '@/components/animations/SectionTitleEntrance'
import StructuredData from '@/components/StructuredData'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from '@/lib/structured-data'

/**
 * TOPページ
 * セクション構成（HANDOFF準拠）:
 * 1. ヒーロー
 * 2. ミライク概要
 * 3. 3つのメリット（選ばれる理由）
 * 4. 支援の流れ
 * 5. 代表メッセージ
 * 6. 無料相談CTA
 */
export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateLocalBusinessSchema(),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main>
        {/* ========================================
            1. ヒーローセクション（GIG風デザイン）
           ======================================== */}
        <section className="relative min-h-screen overflow-hidden">
          {/* 背景: 左白、右黒の斜め分割（パララックス効果） */}
          <div className="absolute inset-0">
            {/* 白背景（左側） */}
            <div className="absolute inset-0 bg-white" />
            {/* 黒背景（右側・斜めカット） */}
            <div
              className="absolute inset-0 bg-[#0A0A0A]"
              style={{
                clipPath: `polygon(${55 - scrollY * 0.01}% 0, 100% 0, 100% 100%, ${35 - scrollY * 0.01}% 100%)`,
                transition: 'clip-path 0.1s ease-out',
              }}
            />
            {/* 金色の斜めライン（パララックス） */}
            <div
              className="absolute top-0 bottom-0 w-px bg-[#D4AF37]"
              style={{
                left: '75%',
                transform: `rotate(-15deg) translateY(${scrollY * 0.1}px)`,
                transformOrigin: 'top',
                height: '120%',
                transition: 'transform 0.1s ease-out',
              }}
            />
          </div>

          {/* メインコンテンツ */}
          <div className="relative z-10 min-h-screen flex flex-col justify-center pt-20">
            {/* SING 文字マスク（パララックス効果） */}
            <div className="container mx-auto px-4 lg:px-8">
              <h1
                className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-bold leading-none tracking-tighter"
                style={{
                  backgroundImage: 'url(/img/hero/1.jpg)',
                  backgroundSize: '120%',
                  backgroundPosition: `center ${50 + scrollY * 0.05}%`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  transition: 'background-position 0.1s ease-out',
                }}
              >
                SING
              </h1>
              {/* スローガン（SINGの下） */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C2A44] mt-4 whitespace-nowrap">
                夢を、ビジネスに。
              </p>
            </div>

            {/* 左下: 英語スローガン */}
            <div className="absolute bottom-24 left-4 lg:left-8">
              <div className="flex items-start gap-6">
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-medium tracking-widest text-[#1C2A44]">
                    Turn Your Vision
                  </p>
                  <p className="text-sm md:text-base font-medium tracking-widest text-[#1C2A44]">
                    Into Business.
                  </p>
                </div>
                <div className="w-px h-16 bg-[#1C2A44]" />
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">
                    起業という選択を、もっと現実的に。
                  </p>
                </div>
              </div>
            </div>

            {/* 右下: CTA + ロゴ */}
            <div className="absolute bottom-24 right-4 lg:right-8 flex items-center gap-6">
              <img
                src="/img/logo/logo-white.png"
                alt="Sing Holdings"
                className="h-10 w-auto hidden md:block"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-6 py-3 text-sm font-medium border border-white hover:bg-transparent hover:text-white transition-colors"
              >
                無料相談はこちら
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 右端: SCROLLインジケーター */}
            <div className="absolute bottom-24 right-4 lg:right-8 hidden lg:flex flex-col items-center gap-2" style={{ right: '20px' }}>
              <span
                className="text-xs text-gray-400 tracking-widest"
                style={{ writingMode: 'vertical-rl' }}
              >
                SCROLL
              </span>
              <div className="w-px h-12 bg-gray-500" />
            </div>
          </div>
        </section>

        {/* ========================================
            2. ミライク概要セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: 画像 */}
              <FadeInUp>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/img/miraiku/miraiku-overview.jpg"
                      alt="ミライク"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              </FadeInUp>

              {/* 右: テキスト */}
              <FadeInUp delay={200}>
                <div className="space-y-6">
                  <div className="mb-4">
                    <span className="text-sm tracking-wider text-gray-500 uppercase">
                      起業支援プログラム
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    MIRAIKU
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    22〜35歳の起業志望者向け。事業設計から収益化まで伴走支援。
                    本気で挑戦する人に、現実的な仕組みと環境を提供します。
                  </p>

                  <Link
                    href="/miraiku"
                    className="inline-flex items-center gap-4 group"
                  >
                    <span className="text-[#1C2A44] font-medium border-b border-[#1C2A44] pb-1">
                      詳細を見る
                    </span>
                    <span className="w-10 h-10 rounded-full border border-[#1C2A44] flex items-center justify-center group-hover:bg-[#1C2A44] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ========================================
            3. 選ばれる理由（3つのメリット）
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <SectionTitleEntrance direction="scale" className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Why Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                選ばれる理由
              </h2>
            </SectionTitleEntrance>

            {/* 3つのメリット */}
            <StaggerContainer staggerDelay={200} className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/why-us-1.jpg"
                    alt="若い代表によるリアルな挑戦環境"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-5xl font-bold text-[#0E7490]">01</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">
                    若い代表によるリアルな挑戦環境
                  </h3>
                  <p className="text-gray-600">
                    代表自身が20代で起業した経験を持ち、同じ目線でリアルな挑戦環境を提供します。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/why-us-2.jpg"
                    alt="実行基盤が整っている"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-5xl font-bold text-[#0E7490]">02</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">
                    実行基盤が整っている
                  </h3>
                  <p className="text-gray-600">
                    営業支援、マーケティング、資金計画など、起業に必要な基盤をグループ全体でサポートします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/why-us-3.jpg"
                    alt="伴走型支援"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-5xl font-bold text-[#0E7490]">03</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">
                    伴走型支援
                  </h3>
                  <p className="text-gray-600">
                    コンサル型ではなく、一緒に走る伴走型。成功するまで諦めずにサポートし続けます。
                  </p>
                </div>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ========================================
            4. 支援の流れセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <SectionTitleEntrance direction="left" className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Flow
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                支援の流れ
              </h2>
            </SectionTitleEntrance>

            {/* 4ステップ */}
            <StaggerContainer staggerDelay={150} className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/flow-1.jpg"
                    alt="無料相談"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    無料相談
                  </h3>
                  <p className="text-sm text-gray-600">
                    まずは話を聞く
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/flow-2.jpg"
                    alt="事業設計・市場検証"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    事業設計・市場検証
                  </h3>
                  <p className="text-sm text-gray-600">
                    アイデアを形にする
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/flow-3.jpg"
                    alt="収益モデル構築"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    収益モデル構築
                  </h3>
                  <p className="text-sm text-gray-600">
                    稼ぐ仕組みを作る
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/img/top/flow-4.jpg"
                    alt="実行・伴走支援"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    実行・伴走支援
                  </h3>
                  <p className="text-sm text-gray-600">
                    一緒に走る
                  </p>
                </div>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ========================================
            5. 代表メッセージセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: テキスト */}
              <FadeInUp>
                <div className="space-y-6">
                  <div className="mb-4">
                    <span className="text-sm tracking-wider text-gray-400 uppercase">
                      Message
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold">
                    代表メッセージ
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    起業は才能ではなく、環境で決まる。挑戦する人が孤立しない社会をつくりたい。
                  </p>

                  <div className="pt-4">
                    <p className="text-sm text-gray-400">
                      株式会社Singホールディングス 代表取締役
                    </p>
                    <p className="text-xl font-bold">
                      笠本 慎二
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/company"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      会社概要へ
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              {/* 右: 代表写真 */}
              <FadeInUp delay={200}>
                <div className="relative">
                  <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/img/company/ceo.jpg"
                      alt="代表取締役 笠本慎二"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ========================================
            6. 無料相談CTAセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeInUp className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                まずは話を聞いてみませんか？
              </h2>

              <p className="text-gray-600 mb-8">
                起業に関するお悩み、何でもお気軽にご相談ください。
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-10 py-5 text-lg font-medium hover:bg-[#141E30] transition-colors"
              >
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                <span>オンライン・対面対応</span>
                <span>60分</span>
                <span>代表が直接対応</span>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
