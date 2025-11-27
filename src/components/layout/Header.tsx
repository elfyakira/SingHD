'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'News', href: '/news' },
  { name: 'Concept', href: '/concept' },
  { name: 'Project', href: '/project' },
  { name: 'Company', href: '/company' },
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
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* TODO: ロゴ画像に置き換え */}
            <div className="flex items-center gap-2">
              {/* ダイヤモンド型ロゴのプレースホルダー */}
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* 左上のダイヤ（白/グレー） */}
                  <polygon
                    points="25,50 50,25 50,50 25,75"
                    fill="#e5e5e5"
                    stroke="#d4d4d4"
                    strokeWidth="1"
                  />
                  {/* 中央のダイヤ（薄いオレンジ/ベージュ） */}
                  <polygon
                    points="50,25 75,50 50,75 25,50"
                    fill="#f5deb3"
                    stroke="#deb887"
                    strokeWidth="1"
                  />
                  {/* 右上のダイヤ（オレンジ） */}
                  <polygon
                    points="50,50 75,25 100,50 75,75"
                    fill="#ea5506"
                    stroke="#d14800"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider">
                  {/* TODO: 会社名に置き換え */}
                  ロゴ
                </span>
                <span className="text-[10px] tracking-widest text-gray-500">
                  HOLDINGS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#ea5506] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#ea5506] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d14800] transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-[#ea5506] transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#ea5506] text-white px-6 py-4 rounded-full text-center font-medium hover:bg-[#d14800] transition-colors mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
