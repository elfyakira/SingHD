'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sword } from 'lucide-react'

export default function RecruitHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWisdomOpen, setIsWisdomOpen] = useState(false)
  const [isWorldOpen, setIsWorldOpen] = useState(false)

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

  const linkClass = 'text-sm font-bold tracking-wider text-gray-700 hover:text-[#2563EB] transition-colors'
  const mobileLinkClass = 'block py-3 text-base font-bold text-gray-700 hover:text-[#2563EB] transition-colors'
  const subLinkClass = 'block px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-colors'

  const close = () => setIsMobileMenuOpen(false)

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo + Corporate Link */}
          <div className="flex items-center gap-4">
            <Link href="/recruit" className="flex items-center gap-2">
              <Sword className="w-5 h-5 text-[#2563EB]" />
              <span className="text-sm font-bold text-[#1C2A44] tracking-wider">
                Sing RECRUIT
              </span>
            </Link>
            <Link href="/" className="hidden lg:block text-xs font-bold text-gray-700 hover:text-[#2563EB] transition-colors ml-6">
              コーポレートサイト
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/recruit/about" className={linkClass}>
              冒険のはじまり
            </Link>
            <Link href="/recruit/mission" className={linkClass}>
              信念と約束
            </Link>

            {/* 冒険の世界 submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsWorldOpen(true)}
              onMouseLeave={() => setIsWorldOpen(false)}
            >
              <span className={`${linkClass} cursor-pointer`}>
                冒険の世界
              </span>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  isWorldOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[180px]">
                  <Link href="/recruit/adventure-map" className={subLinkClass}>
                    冒険マップ
                  </Link>
                  <Link href="/recruit/characters" className={subLinkClass}>
                    冒険者タイプ
                  </Link>
                  <Link href="/recruit/oath" className={subLinkClass}>
                    冒険者の誓い
                  </Link>
                  <Link href="/recruit/last-boss" className={subLinkClass}>
                    ラスボス
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/recruit/diagnosis" className={linkClass}>
              冒険診断
            </Link>

            {/* 冒険の知恵袋 submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsWisdomOpen(true)}
              onMouseLeave={() => setIsWisdomOpen(false)}
            >
              <span className={`${linkClass} cursor-pointer`}>
                冒険の知恵袋
              </span>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  isWisdomOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[200px]">
                  <p className="px-5 py-1.5 text-[10px] uppercase tracking-widest text-[#2563EB] font-bold">挑戦者ストーリー</p>
                  <Link href="/recruit/stories/watanabe" className={subLinkClass}>
                    渡邉 大輝
                  </Link>
                  <Link href="/recruit/stories/iida" className={subLinkClass}>
                    飯田 思遠
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <p className="px-5 py-1.5 text-[10px] uppercase tracking-widest text-[#2563EB] font-bold">冒険者ガイド</p>
                  <Link href="/recruit/guide" className={subLinkClass}>
                    コンテンツ一覧
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/recruit/entry"
              className="text-sm font-bold tracking-wider text-white bg-[#F59E0B] px-6 py-2.5 rounded-full hover:bg-[#D97706] transition-colors"
            >
              ▶ 冒険に参加する
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

    </header>

      {/* Mobile Navigation — headerの外に配置（backdrop-filterによるfixed破壊を回避） */}
      <div
        className={`lg:hidden fixed inset-0 top-14 z-40 bg-white overflow-y-auto transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="px-6 py-8">
          <div className="space-y-1">
            <Link href="/recruit/about" className={mobileLinkClass} onClick={close}>
              冒険のはじまり
            </Link>
            <Link href="/recruit/mission" className={mobileLinkClass} onClick={close}>
              信念と約束
            </Link>
            <Link href="/recruit/diagnosis" className={mobileLinkClass} onClick={close}>
              冒険診断
            </Link>
          </div>

          {/* 冒険の世界 */}
          <div className="mt-6 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-3">
              冒険の世界
            </p>
            <div className="space-y-1 pl-3 border-l-2 border-[#2563EB]/20">
              <Link href="/recruit/adventure-map" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                冒険マップ
              </Link>
              <Link href="/recruit/characters" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                冒険者タイプ
              </Link>
              <Link href="/recruit/oath" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                冒険者の誓い
              </Link>
              <Link href="/recruit/last-boss" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                ラスボス
              </Link>
            </div>
          </div>

          {/* 冒険の知恵袋 */}
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-3">
              冒険の知恵袋
            </p>
            <div className="space-y-1 pl-3 border-l-2 border-[#2563EB]/20">
              <p className="py-1.5 text-[10px] text-gray-400 font-medium tracking-wider">挑戦者ストーリー</p>
              <Link href="/recruit/stories/watanabe" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                渡邉 大輝
              </Link>
              <Link href="/recruit/stories/iida" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                飯田 思遠
              </Link>
              <div className="border-t border-gray-100 my-1" />
              <p className="py-1.5 text-[10px] text-gray-400 font-medium tracking-wider">冒険者ガイド</p>
              <Link href="/recruit/guide" className="block py-2.5 text-sm font-bold text-gray-700 hover:text-[#2563EB] transition-colors" onClick={close}>
                コンテンツ一覧
              </Link>
            </div>
          </div>

          <Link
            href="/recruit/entry"
            className="block text-center text-lg font-bold tracking-wider text-white bg-[#F59E0B] py-4 mt-6 rounded-full hover:bg-[#D97706] transition-colors"
            onClick={close}
          >
            ▶ 冒険に参加する
          </Link>

          <Link
            href="/"
            className="block text-center text-xs text-gray-400 mt-4 py-2 hover:text-gray-600 transition-colors"
            onClick={close}
          >
            コーポレートサイトへ戻る
          </Link>
        </nav>
      </div>
    </>
  )
}
