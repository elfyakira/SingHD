'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'MIRAIKU', href: '/miraiku' },
  { name: '会社概要', href: '/company' },
  { name: 'Sing発スタートアップ企業', href: '/project' },
  { name: 'ニュース', href: '/news' },
  { name: 'お問い合わせ', href: '/contact' },
  { name: '採用サイト', href: '/recruit' },
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
            <Image
              src="/img/logo/logo.png"
              alt="Sing Holdings"
              width={160}
              height={80}
              className="h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wider text-foreground hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
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
              className="text-lg font-medium text-foreground hover:text-secondary transition-colors py-2 border-b border-gray-100 tracking-wider"
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
            無料相談を予約する
          </Link>
        </nav>
      </div>
    </header>
  )
}
