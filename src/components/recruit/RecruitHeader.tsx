'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sword } from 'lucide-react'
import { recruitChapters } from '@/data/recruit-chapters'

export default function RecruitHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const phaseLabels = {
    hook: '感情を動かす',
    empathy: '共感',
    growth: '成長イメージ',
    apply: '応募',
  }

  const phases = ['hook', 'empathy', 'growth', 'apply'] as const

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/miraiku/recruit" className="flex items-center gap-2">
            <Sword className="w-5 h-5 text-[#2563EB]" />
            <span className="text-sm font-bold text-[#1C2A44] tracking-wider">
              SING RECRUIT
            </span>
          </Link>

          {/* Desktop: Key links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/miraiku/recruit"
              className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              TOP
            </Link>
            <Link
              href="/miraiku/recruit/characters"
              className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              求める人物
            </Link>
            <Link
              href="/miraiku/recruit/stories/watanabe"
              className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              挑戦者ストーリー
            </Link>
            <Link
              href="/miraiku/recruit/jobs"
              className="text-xs font-medium tracking-wider text-white bg-[#F59E0B] px-5 py-2 rounded-full hover:bg-[#D97706] transition-colors"
            >
              募集要項
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1C2A44]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1C2A44]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 top-14 bg-white/98 backdrop-blur-md transition-all duration-300 overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="px-6 py-8">
          {phases.map((phase) => (
            <div key={phase} className="mb-6">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-3">
                {phaseLabels[phase]}
              </p>
              <div className="space-y-1">
                {recruitChapters
                  .filter((c) => c.phase === phase)
                  .map((chapter) => (
                    <Link
                      key={chapter.id}
                      href={chapter.href}
                      className="flex items-center gap-3 py-2.5 text-gray-700 hover:text-[#2563EB] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xs text-gray-400 w-5">{chapter.number}</span>
                      <span className="text-sm">{chapter.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}

          <Link
            href="/miraiku/recruit/jobs"
            className="block text-center text-sm font-medium tracking-wider text-white bg-[#F59E0B] py-4 mt-6 rounded-full hover:bg-[#D97706] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            エントリーする
          </Link>

          <Link
            href="/"
            className="block text-center text-xs text-gray-400 mt-4 py-2 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            コーポレートサイトへ戻る
          </Link>
        </nav>
      </div>
    </header>
  )
}
