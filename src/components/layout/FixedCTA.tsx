'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * 固定CTAボタン
 * - 右下に固定表示
 * - スクロールで表示
 * - ロゴ + CTAテキスト
 */
export default function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // 採用ページ配下では非表示（専用CTAがある）
  const isRecruit = pathname.startsWith('/miraiku/recruit')

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isRecruit) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center gap-3 bg-white border border-gray-200 rounded-full pl-4 pr-2 py-2 shadow-lg hover:shadow-xl transition-shadow group"
      >
        {/* ロゴ部分 */}
        <div className="w-10 h-10 rounded-full border border-[#1C2A44] flex items-center justify-center">
          <span className="text-xs font-bold text-[#1C2A44]">S</span>
        </div>

        {/* CTAテキスト */}
        <span className="text-sm font-medium text-foreground pr-2">
          無料相談はこちら
        </span>

        {/* 矢印アイコン */}
        <div className="w-8 h-8 rounded-full bg-[#1C2A44] text-white flex items-center justify-center group-hover:bg-[#141E30] transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  )
}
