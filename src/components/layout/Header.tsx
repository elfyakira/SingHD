'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: '企業コンセプト', href: '/concept' },
  { name: 'グループ会社', href: '/project' },
  { name: '会社概要', href: '/company' },
  { name: 'ニュース', href: '/news' },
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
            <img
              src="/singhdlogo512.png"
              alt="Singホールディングス"
              className="h-20 md:h-24 w-auto"
            />
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
              お問い合わせ
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
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  )
}
