'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sword } from 'lucide-react'

export default function RecruitHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStoryOpen, setIsStoryOpen] = useState(false)

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
              href="/miraiku/recruit/about"
              className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              About
            </Link>
            <Link
              href="/miraiku/recruit/diagnosis"
              className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              冒険診断
            </Link>

            {/* 挑戦者ストーリー with hover submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsStoryOpen(true)}
              onMouseLeave={() => setIsStoryOpen(false)}
            >
              <span className="text-xs font-medium tracking-wider text-gray-600 hover:text-[#2563EB] transition-colors cursor-pointer">
                挑戦者ストーリー
              </span>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  isStoryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[180px]">
                  <Link
                    href="/miraiku/recruit/stories/watanabe"
                    className="block px-5 py-2.5 text-xs text-gray-700 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-colors"
                  >
                    渡邉 大輝
                  </Link>
                  <Link
                    href="/miraiku/recruit/stories/iida"
                    className="block px-5 py-2.5 text-xs text-gray-700 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-colors"
                  >
                    飯田 思遠
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/miraiku/recruit/entry"
              className="text-xs font-medium tracking-wider text-white bg-[#F59E0B] px-5 py-2 rounded-full hover:bg-[#D97706] transition-colors"
            >
              エントリー
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
          <div className="space-y-1">
            <Link
              href="/miraiku/recruit"
              className="block py-3 text-sm text-gray-700 hover:text-[#2563EB] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TOP
            </Link>
            <Link
              href="/miraiku/recruit/about"
              className="block py-3 text-sm text-gray-700 hover:text-[#2563EB] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/miraiku/recruit/diagnosis"
              className="block py-3 text-sm text-gray-700 hover:text-[#2563EB] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              冒険診断
            </Link>
          </div>

          <div className="mt-6 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-3">
              挑戦者ストーリー
            </p>
            <div className="space-y-1 pl-3 border-l-2 border-[#2563EB]/20">
              <Link
                href="/miraiku/recruit/stories/watanabe"
                className="block py-2.5 text-sm text-gray-700 hover:text-[#2563EB] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                渡邉 大輝
              </Link>
              <Link
                href="/miraiku/recruit/stories/iida"
                className="block py-2.5 text-sm text-gray-700 hover:text-[#2563EB] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                飯田 思遠
              </Link>
            </div>
          </div>

          <Link
            href="/miraiku/recruit/entry"
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
