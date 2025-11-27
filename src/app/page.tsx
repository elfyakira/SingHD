'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/layout/ContactCTA'
import StructuredData from '@/components/StructuredData'
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

// ヒーロー画像のパス（3パターン）
const heroImages = [
  '/img/hero/1.jpg',
  '/img/hero/2.jpg',
  '/img/hero/3.jpg',
]

// スター装飾の位置設定
const starPositions = [
  { top: '10%', left: '5%', size: 'w-3 h-3', color: 'bg-[#ea5506]' },
  { top: '20%', right: '10%', size: 'w-4 h-4', color: 'bg-[#22c55e]' },
  { top: '60%', left: '8%', size: 'w-2 h-2', color: 'bg-[#3b82f6]' },
  { top: '75%', right: '5%', size: 'w-3 h-3', color: 'bg-[#ea5506]' },
  { top: '40%', left: '2%', size: 'w-2 h-2', color: 'bg-[#22c55e]' },
  { top: '85%', left: '15%', size: 'w-4 h-4', color: 'bg-[#3b82f6]' },
]

// アニメーションタイミング定数（ワークナビHD準拠）
const SLIDE_DURATION = 5800 // スライド切り替え間隔
const STAR_START_DELAY = 1800 // スター表示開始タイミング
const STAR_INTERVAL = 300 // スター表示間隔
const STAR_HIDE_DELAY = 500 // スター非表示までの時間

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prevImageIndex, setPrevImageIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeStars, setActiveStars] = useState<number[]>([])
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const starTimeoutsRef = useRef<NodeJS.Timeout[]>([])

  const schemas = [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateServiceSchema(),
    generateLocalBusinessSchema(),
  ]

  // 3つの窓の位置（左・中央・右）
  // backgroundSize: 300% の画像を3分割するため 0%, 50%, 100% を使用
  const windowPositions = [
    { left: '0%', mt: '' },
    { left: '50%', mt: 'mt-8' },
    { left: '100%', mt: 'mt-16' },
  ]

  // スター装飾のシーケンシャルアニメーション
  const animateStars = useCallback(() => {
    // 前のタイムアウトをクリア
    starTimeoutsRef.current.forEach(clearTimeout)
    starTimeoutsRef.current = []
    setActiveStars([])

    // 各スターを順番に表示
    starPositions.forEach((_, index) => {
      const showTimeout = setTimeout(() => {
        setActiveStars(prev => [...prev, index])
      }, index * STAR_INTERVAL)
      starTimeoutsRef.current.push(showTimeout)

      // 表示後に非表示
      const hideTimeout = setTimeout(() => {
        setActiveStars(prev => prev.filter(i => i !== index))
      }, index * STAR_INTERVAL + STAR_HIDE_DELAY)
      starTimeoutsRef.current.push(hideTimeout)
    })
  }, [])

  // スライド切り替え処理
  const changeSlide = useCallback((newIndex: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setPrevImageIndex(currentImageIndex)
    setCurrentImageIndex(newIndex)
    setProgress(0)

    // スター表示開始
    const starTimeout = setTimeout(() => {
      animateStars()
    }, STAR_START_DELAY)

    // アニメーション完了
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false)
      setPrevImageIndex(null)
    }, 1200)

    return () => {
      clearTimeout(starTimeout)
      clearTimeout(animationTimeout)
    }
  }, [currentImageIndex, isAnimating, animateStars])

  // 自動スライド切り替え
  useEffect(() => {
    // 初期ロード完了
    const initTimeout = setTimeout(() => {
      setIsInitialLoad(false)
    }, 100)

    const slideInterval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % heroImages.length
      changeSlide(nextIndex)
    }, SLIDE_DURATION)

    return () => {
      clearTimeout(initTimeout)
      clearInterval(slideInterval)
    }
  }, [currentImageIndex, changeSlide])

  // プログレスバーアニメーション
  useEffect(() => {
    if (progressRef.current) {
      clearInterval(progressRef.current)
    }

    setProgress(0)
    const startTime = Date.now()

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(progressRef.current!)
      }
    }, 50)

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current)
      }
    }
  }, [currentImageIndex])

  // 初期スターアニメーション
  useEffect(() => {
    const initialStarTimeout = setTimeout(() => {
      animateStars()
    }, STAR_START_DELAY)

    return () => clearTimeout(initialStarTimeout)
  }, [animateStars])

  // クリーンアップ
  useEffect(() => {
    return () => {
      starTimeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* スター装飾要素 */}
          {starPositions.map((star, index) => (
            <div
              key={index}
              className={`absolute ${star.size} ${star.color} rounded-full hero-star ${
                activeStars.includes(index) ? 'show' : ''
              }`}
              style={{
                top: star.top,
                left: star.left,
                right: star.right,
                zIndex: 10,
              }}
            />
          ))}

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div className="order-2 lg:order-1">
                <div
                  className={`flex items-center gap-4 mb-4 hero-text ${!isInitialLoad ? 'animate' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="w-12 h-px bg-gray-400" />
                  <p className="text-gray-600">
                    未来を変える挑戦に、力を。
                  </p>
                </div>
                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold italic leading-tight hero-text ${!isInitialLoad ? 'animate' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  Shape the future.
                </h1>
              </div>

              {/* Right: Images - 1枚の画像を3つの窓で分割表示 */}
              <div className="order-1 lg:order-2 relative w-full">
                <div className="flex gap-2 sm:gap-4 justify-center lg:justify-end max-w-full mx-auto">
                  {windowPositions.map((pos, i) => (
                    <div
                      key={i}
                      className={`relative w-[28vw] sm:w-32 md:w-40 lg:w-48 max-w-[120px] sm:max-w-none h-40 sm:h-48 md:h-64 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hero-window ${!isInitialLoad ? 'animate' : ''} ${pos.mt}`}
                    >
                      {/* 画像を3枚重ねてフェードで切り替え */}
                      {heroImages.map((src, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 hero-slide ${
                            imgIndex === currentImageIndex ? 'active' : ''
                          } ${imgIndex === prevImageIndex ? 'exiting' : ''}`}
                          style={{
                            backgroundImage: `url(${src})`,
                            backgroundSize: '300% auto',
                            backgroundPosition: `${pos.left} center`,
                          }}
                        />
                      ))}
                      {/* プレースホルダー（画像がない場合） */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-orange-200 -z-10" />
                    </div>
                  ))}
                </div>

                {/* インジケーター with プログレスバー */}
                <div className="flex justify-center lg:justify-end gap-3 mt-6">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => changeSlide(i)}
                      disabled={isAnimating}
                      className={`relative w-12 h-1 rounded-full overflow-hidden transition-all ${
                        i === currentImageIndex ? 'bg-gray-200' : 'bg-gray-300'
                      }`}
                      aria-label={`スライド${i + 1}に切り替え`}
                    >
                      {i === currentImageIndex && (
                        <div
                          className="absolute inset-y-0 left-0 bg-[#ea5506] rounded-full"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll</span>
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center scroll-indicator">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <span className="text-[#ea5506] font-medium">News</span>
              <span className="text-gray-400 text-sm">
                {/* TODO: 実際のニュースデータ */}
                2025/01/01
              </span>
              <span className="text-gray-700 flex-1 truncate">
                {/* TODO: 実際のニュースタイトル */}
                コーポレートサイトを開設しました。
              </span>
            </div>
          </div>
        </section>

        {/* Success to Success Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src="/img/hero/business.jpg"
                    alt="ビジネスイメージ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-8">
                  Brighten the future.
                </h2>
                <p className="text-xl md:text-2xl font-medium mb-4">
                  次世代にバトンを繋ぎ
                  <br />
                  輝き続ける
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  私たちは、未来を変える挑戦に光を注ぎます。
                  <br />
                  受け継がれる情熱が、企業と人をさらに輝かせ、
                  <br />
                  限界を超えて進む力になる。
                  <br />
                  その一歩が未来を照らし、社会を明るく導くと信じているからです。
                </p>
                <Link
                  href="/concept"
                  className="inline-flex items-center gap-4 text-[#ea5506] font-medium group"
                >
                  <span className="border-b border-[#ea5506] pb-1">
                    Concept
                  </span>
                  <span className="text-sm text-gray-500">企業コンセプトへ</span>
                  <span className="w-10 h-10 rounded-full border border-[#ea5506] flex items-center justify-center group-hover:bg-[#ea5506] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <img
              src="/img/hero/company-bg.jpg"
              alt=""
              className="w-full h-full object-cover blur-md"
            />
          </div>
          {/* Color Overlay */}
          <div className="absolute inset-0 z-10 bg-blue-900/50" />

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20 text-center text-white">
            <p className="text-sm mb-2">会社概要</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-6">
              Company
            </h2>
            <p className="max-w-2xl mx-auto opacity-90 mb-8">
              代表からのメッセージ、会社の詳細な情報を
              <br />
              「会社概要」ページでご覧いただけます。
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all"
            >
              Company
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Project Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-[#22c55e]" />
                  <p className="text-gray-600">グループ会社紹介</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold italic mb-8">
                  Project
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  私たちは、未来を形づくり、次世代へ価値を繋ぐ事業を展開しています。
                  <br />
                  成長の核となる事業と、それを支えるサービスを通じて、
                  <br />
                  企業と人の挑戦を支え、未来を照らす価値を創造します。
                </p>
                <Link
                  href="/project"
                  className="inline-flex items-center gap-4 text-[#22c55e] font-medium group"
                >
                  <span>READ MORE</span>
                  <span className="w-10 h-10 rounded-full border border-[#22c55e] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              {/* Circles */}
              <div className="relative">
                <div className="flex flex-wrap justify-center gap-4">
                  {/* 3つの緑の円 */}
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#22c55e] flex flex-col items-center justify-center text-white text-center px-2">
                    <span className="text-base md:text-lg font-medium">Human</span>
                    <span className="text-base md:text-lg font-medium">Resources</span>
                    <span className="text-xs md:text-sm mt-1 md:mt-2 opacity-80">
                      人財コンサルティング業
                    </span>
                  </div>
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#22c55e] flex flex-col items-center justify-center text-white mt-8 text-center px-2">
                    <span className="text-base md:text-lg font-medium">Consulting</span>
                    <span className="text-xs md:text-sm mt-1 md:mt-2 opacity-80">
                      企業コンサルティング業
                    </span>
                  </div>
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#22c55e] flex flex-col items-center justify-center text-white mt-4 text-center px-2">
                    <span className="text-base md:text-lg font-medium">Branding</span>
                    <span className="text-xs md:text-sm mt-1 md:mt-2 opacity-80">企業ブランディング事業</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-blue-100">
                  <img
                    src="/img/hero/city.jpg"
                    alt="都市イメージ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span className="text-[#22c55e] font-medium">代表挨拶</span>
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  未来へ光を受け継ぎ、
                  <br />
                  挑戦を共に。
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  私たちの原点には、ひとつひとつの挑戦を諦めず、
                  <br />
                  未来へと繋ぐ想いがあります。
                  <br />
                  ビジネスの成長は、決断の積み重ねと、情熱を持った人々によって生まれるもの。
                  <br />
                  その価値を次世代に渡し、企業の輝きを引き出すことが、私たちの使命です。
                  <br />
                  ここでは、未来に向けた想いと、これから描くビジョンについてお伝えします。
                </p>
                <Link
                  href="/company"
                  className="inline-flex items-center gap-4 text-[#22c55e] font-medium group"
                >
                  <span>READ MORE</span>
                  <span className="w-10 h-10 rounded-full border border-[#22c55e] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactCTA />
      <Footer />
    </>
  )
}
