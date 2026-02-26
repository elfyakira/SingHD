'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* セクションヘッダー */}
          <div className="mb-6">
            <span className="text-sm tracking-wider text-gray-500 uppercase">
              Contact
            </span>
          </div>

          {/* タイトル */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お問い合わせ
          </h2>

          {/* サブテキスト */}
          <p className="text-gray-600 mb-8">
            ご相談・お問い合わせはお気軽にどうぞ
          </p>

          {/* CTAボタン */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-10 py-5 text-lg font-medium hover:bg-[#141E30] transition-colors"
          >
            お問い合わせはこちら
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
