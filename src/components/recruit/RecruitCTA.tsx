'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sword } from 'lucide-react'

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
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Link
        href="/miraiku/recruit/jobs"
        className="flex items-center gap-3 bg-[#F59E0B] text-white px-5 py-3 rounded-full shadow-lg shadow-[#F59E0B]/30 hover:bg-[#D97706] transition-all group"
      >
        <Sword className="w-4 h-4" />
        <span className="text-sm font-bold tracking-wider">
          冒険に参加する
        </span>
      </Link>
    </div>
  )
}
