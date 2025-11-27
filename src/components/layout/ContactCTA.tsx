'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 bg-[#ea5506] text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-[#d14800] transition-all hover:scale-105"
        >
          お問い合わせ
          <span className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </section>
  )
}
