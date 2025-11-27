'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/layout/ContactCTA'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

export default function ConceptPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: siteConfig.siteUrl || '/' },
    { name: '企業コンセプト', url: `${siteConfig.siteUrl}/concept` },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <LowPageHero
          titleEn="Concept"
          titleJa="企業コンセプト"
          imageSrc="/img/concept/concept-hero.jpg"
        />

        {/* MVV Section */}
        <section id="mvv" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">
                ミッション・ビジョン・バリュー
              </h2>
              <div className="w-16 h-1 bg-[#ea5506] mx-auto" />
            </div>

            {/* MVV Diagram */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#ea5506] to-[#f97316] flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold italic">Mission</span>
                <span className="text-sm">ミッション</span>
              </div>
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#f97316] to-[#fb923c] flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold italic">Vision</span>
                <span className="text-sm">ビジョン</span>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#fb923c] to-[#fdba74] flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold italic">Value</span>
                <span className="text-sm">バリュー</span>
              </div>
            </div>

            {/* MVV Details */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Mission */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#ea5506] flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-base md:text-lg font-bold italic">Mission</span>
                  <span className="text-xs">ミッション</span>
                </div>
                <p className="text-gray-700 leading-relaxed pt-0 md:pt-4">
                  「日本の人と企業が挑戦と成長を続ける環境を整備し、次世代に確かな価値を残すことに貢献する。」
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f97316] flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-base md:text-lg font-bold italic">Vision</span>
                  <span className="text-xs">ビジョン</span>
                </div>
                <p className="text-gray-700 leading-relaxed pt-0 md:pt-4">
                  「社会に笑顔が溢れ誰もが自らの力を発揮できる社会の実現に貢献する。」
                </p>
              </div>

              {/* Value */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#fb923c] flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-base md:text-lg font-bold italic">Value</span>
                  <span className="text-xs">バリュー</span>
                </div>
                <div className="pt-0 md:pt-4">
                  <ol className="space-y-3 text-gray-700 text-sm md:text-base">
                    <li><strong>Professional（プロフェッショナル）</strong><br />誠実さと高い視座を持ち、成果に責任を持って行動する。</li>
                    <li><strong>Challenge（挑戦）</strong><br />主体性を持ち、新しい価値を創るために積極的に挑戦する。</li>
                    <li><strong>Enjoy（楽しむ）</strong><br />「頑張る」を楽しむに変え人生を笑って楽しむ。</li>
                    <li><strong>Collaboration（協働）</strong><br />仲間・パートナーとのつながりを大切に、感謝と成長を循環させる。</li>
                    <li><strong>Innovation（革新）</strong><br />現状に満足せず、常に改善し続け、新しい可能性を生み出す。</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section id="slogan" className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              スローガン
            </h2>
            <div className="w-16 h-1 bg-[#ea5506] mx-auto mb-12" />

            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              日本の明日を支え、バトンを繋ぐ
            </p>
          </div>
        </section>

        {/* Logo Section */}
        <section id="logo" className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              ロゴマーク
            </h2>
            <div className="w-16 h-1 bg-[#ea5506] mx-auto mb-12" />

            {/* Logo */}
            <div className="max-w-sm mx-auto">
              <img
                src="/singhdlogo512.png"
                alt="Singホールディングス ロゴ"
                className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <ContactCTA />
      <Footer />
    </>
  )
}
