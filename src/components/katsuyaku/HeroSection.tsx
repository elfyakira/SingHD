'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-white" />

      {/* キービジュアル（右側） */}
      <div className="absolute right-0 top-0 w-full lg:w-[45%] h-[45vh] lg:h-full">
        <div className="relative w-full h-full bg-[#1C2A44]/5">
          {/* プレースホルダー: 現場写真が入る */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/40 lg:to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/img/katsuyaku/hero.jpg)',
              backgroundColor: '#E8E4DF',
            }}
          />
        </div>
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-6 lg:px-20 pt-[48vh] lg:pt-0">
          <div className="max-w-2xl">
            {/* ゴールドの縦線 + メインコピー */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-[3px] h-[80px] bg-accent-line mt-2 shrink-0"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                }}
              />
              <div>
                <h1
                  className="text-[26px] lg:text-[42px] font-bold text-primary leading-tight"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
                  }}
                >
                  人が辞めない会社には、
                  <br />
                  理由がある。
                </h1>

                {/* サブコピー */}
                <p
                  className="text-base lg:text-lg text-[#5C5C5C] mt-4 leading-relaxed"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
                  }}
                >
                  離職率22%→9%。
                  <br className="lg:hidden" />
                  採用・定着・戦力化を、現場で一緒につくる。
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="mt-10 lg:mt-12"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s',
              }}
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-cta text-white px-8 lg:px-12 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg hover:bg-cta-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                まずは無料で相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[13px] text-[#5C5C5C] mt-3">
                経営者・人事責任者の方へ ｜ オンライン相談OK・30秒で入力完了
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-out 1.2s',
        }}
      >
        <span className="text-xs text-[#5C5C5C] tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-[#5C5C5C]/30 relative overflow-hidden">
          <div className="w-full h-full bg-[#1C2A44] scroll-indicator" style={{ animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}
