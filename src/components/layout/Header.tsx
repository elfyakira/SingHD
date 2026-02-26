'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

// ナビゲーション項目（HANDOFF準拠）
// 文言は後でヒアリングシートで確定
const navigation = [
  { name: '{NAV_MIRAIKU}', href: '/miraiku' },
  { name: '{NAV_COMPANY}', href: '/company' },
  { name: '{NAV_PROJECT}', href: '/project' },
  { name: '{NAV_NEWS}', href: '/news' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* ロゴ: 新規作成待ち - 現在は仮テキスト */}
            <span className="text-xl font-bold tracking-wider text-[#1C2A44]">
              {'{LOGO}'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wider text-foreground hover:text-secondary transition-colors uppercase"
              >
                {item.name}
              </Link>
            ))}
            {/* Contact は右下固定CTAボタンに移動 */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-foreground hover:text-secondary transition-colors py-2 border-b border-gray-100 uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-4 text-center font-medium hover:bg-primary-dark transition-colors mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {'{CTA_BUTTON}'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
