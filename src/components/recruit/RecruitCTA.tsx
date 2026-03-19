'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FadeInUp from '@/components/animations/FadeInUp'

export default function RecruitCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── セクションCTA（ページ下部） ── */}
      <section className="py-16 px-2">
        <FadeInUp>
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-sm px-4 sm:px-8 py-10 relative"
              style={{
                background: 'radial-gradient(ellipse 80% 95% at center, #EDE4D3 0%, #E5D9C3 60%, #D9CCB0 85%, #CCBB96 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              {/* 紙の質感 */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{ boxShadow: 'inset 0 0 60px rgba(139,119,82,0.12), inset 0 0 20px rgba(139,119,82,0.06)' }}
              />

              {/* 上部装飾線 */}
              <div className="flex items-center justify-center gap-4 mb-8 relative">
                <div className="w-16 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-24 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-16 h-px bg-[#8B7752]/30" />
              </div>

              {/* メインコピー */}
              <div className="text-center mb-8 relative">
                <p
                  className="text-3xl lg:text-5xl font-bold text-[#4A3F2F] mb-3"
                  style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
                >
                  人生を、歌え。
                </p>
                <p className="text-sm lg:text-base text-[#8B7752]/70">
                  あなたは、自分の人生の主人公を生きていますか？
                </p>
              </div>

              {/* 吹き出し */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6 relative">
                {[
                  { text: 'もっと\n成長したい', sub: '今の環境では物足りない' },
                  { text: 'もっと\n挑戦したい', sub: '安定より自分を試したい' },
                  { text: '自分の可能性を\n試したい', sub: 'このままで終わりたくない' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border-[5px] border-[#D4A84B]/40 rounded-3xl px-4 py-5 text-center shadow-[0_4px_15px_rgba(139,119,82,0.2)]"
                  >
                    <p className="text-lg lg:text-xl font-bold text-[#4A3F2F] leading-relaxed whitespace-pre-line">
                      「{item.text}」
                    </p>
                    <p className="text-xs text-[#8B7752] mt-2">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* キャラクター + 解決メッセージ */}
              <div className="relative flex items-end justify-center mb-8">
                <Image
                  src="/img/recruit/cta/cta-hero.png"
                  alt="勇者"
                  width={400}
                  height={400}
                  className="w-32 md:w-52 h-auto relative z-10 -translate-x-28 md:-translate-x-48"
                />
                <div className="w-0 md:w-0" />
                <Image
                  src="/img/recruit/cta/cta-warrior.png"
                  alt="戦士"
                  width={400}
                  height={400}
                  className="w-26 md:w-40 h-auto relative z-10 translate-x-24 md:translate-x-42"
                />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-6 z-0 bg-[#D97706] text-white px-4 py-4 md:px-10 md:py-6 rounded-2xl whitespace-nowrap shadow-lg shadow-[#D97706]/30">
                  <p
                    className="text-sm md:text-2xl lg:text-3xl font-bold"
                    style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
                  >
                    その気持ちが、主人公の証拠です
                  </p>
                </div>
              </div>

              {/* 3つの理由 */}
              <div className="grid grid-cols-3 gap-2 lg:gap-6 max-w-4xl mx-auto relative">
                {[
                  { label: '学びの環境', main: '経験値を\n得られる場所', color: 'text-[#D97706]' },
                  { label: '寄り添う仲間', main: '一緒に壁を\n越える仲間', color: 'text-[#D97706]' },
                  { label: '多様な個性', main: '違っていい。\n短所を補い合う', color: 'text-[#D97706]' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-2 lg:p-6 text-center shadow-[0_2px_8px_rgba(139,119,82,0.1)]">
                    <p className="text-[10px] lg:text-xs font-semibold text-[#8B7752] mb-1 lg:mb-2">{item.label}</p>
                    <p className={`text-xs lg:text-lg font-bold ${item.color} leading-snug whitespace-pre-line`}>
                      {item.main}
                    </p>
                  </div>
                ))}
              </div>

              {/* 締めメッセージ + CTA */}
              <div className="text-center mt-10 relative">
                <p
                  className="text-lg md:text-xl font-bold text-[#4A3F2F] mb-2"
                  style={{ fontFamily: '"Times New Roman", "Yu Mincho", serif' }}
                >
                  さあ、次はあなたの番です。
                </p>
                <p className="text-sm text-[#8B7752] mb-8">
                  あなたの冒険をSingホールディングスで。
                </p>

                <Link
                  href="/recruit/entry"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#F59E0B] hover:bg-[#D97706] text-white text-base md:text-lg font-bold tracking-wider rounded-full shadow-lg shadow-[#F59E0B]/30 transition-all duration-300 hover:scale-105"
                >
                  ▶ 冒険に参加する
                </Link>
              </div>

              {/* 下部装飾線 */}
              <div className="flex items-center justify-center gap-4 mt-10 relative">
                <div className="w-16 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-24 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-16 h-px bg-[#8B7752]/30" />
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ── フローティングCTA（PC右下） ── */}
      <div
        className={`hidden lg:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Link
          href="/recruit/entry"
          className="flex items-center gap-3 bg-[#F59E0B] text-white px-5 py-3 rounded-full shadow-lg shadow-[#F59E0B]/30 hover:bg-[#D97706] transition-all group"
        >
          <span className="text-sm font-bold tracking-wider">
            ▶ 冒険者ギルドに相談する
          </span>
        </Link>
      </div>
    </>
  )
}
