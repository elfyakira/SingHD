'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import FadeInUp from '@/components/animations/FadeInUp'
import SectionTitleEntrance from '@/components/animations/SectionTitleEntrance'
import {
  generateBreadcrumbSchema,
  generateAboutPageSchema,
  generateOrganizationSchema,
  generatePersonSchema,
} from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

export default function CompanyPage() {
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl || '/' },
      { name: '会社概要', url: `${siteConfig.siteUrl}/company` },
    ]),
    generateAboutPageSchema(),
    generateOrganizationSchema(),
    generatePersonSchema({
      name: siteConfig.company.representative,
      nameEn: siteConfig.company.representativeEn,
      position: '代表取締役社長',
      positionEn: 'CEO',
      image: siteConfig.executives[0]?.image,
      description: `${siteConfig.company.name} 代表取締役社長`,
    }),
  ]

  const companyInfo = [
    { label: '企業名', value: '株式会社Singホールディングス' },
    { label: '代表', value: '笠本慎二' },
    {
      label: '事業内容',
      value: '企業ブランディング支援\n人財コンサルティング・採用支援\nメディア・出版事業（例：月刊Sing）\nグループ会社の経営管理、ならびにそれに付随する業務',
    },
    { label: '設立', value: '2026年3月1日' },
    {
      label: '所在地',
      value: '〒486-0918\n愛知県春日井市如意申町７丁目15−５ アーバンハイツ春日井 302号',
    },
    { label: 'アクセス', value: '勝川駅より車で8分' },
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <LowPageHero
          titleEn="Company"
          titleJa="会社概要"
          imageSrc="/img/company/company-hero.jpg"
        />

        {/* ========================================
            代表挨拶セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <SectionTitleEntrance direction="scale" className="mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Message
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                代表挨拶
              </h2>
            </SectionTitleEntrance>

            {/* コンテンツ */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* 代表写真 */}
              <FadeInUp>
                <div className="relative">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                    <img
                      src="/img/company/ceo.jpg"
                      alt="代表取締役 笠本慎二"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeInUp>

              {/* メッセージ */}
              <FadeInUp delay={200}>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">
                    次世代の笑顔のために、
                    <br />
                    今を動かす
                  </h3>

                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      株式会社Singホールディングス 代表 笠本慎二です。
                    </p>
                    <p>
                      私たちは、次世代にバトンを繋ぎ、誰もが笑顔で活躍できる社会を実現することを使命としています。企業や人の挑戦を支え、成長を後押しすること。それが地域や日本全体の持続可能な発展につながると信じ、日々行動しています。
                    </p>
                    <p>
                      Singホールディングスの原動力は、人を大切にする文化と、仲間・パートナーとの強い信頼関係です。部下や社員一人ひとりの力を最大限に引き出し、共に挑戦し、成果を分かち合うことで、未来へのバトンを確実につなぎます。
                    </p>
                    <p>
                      私たちはこれからも、挑戦を恐れず、行動を止めず、次世代にバトンを繋ぎ、誰もが笑顔で活躍できる社会の実現を目指して、企業と人々の未来を照らす存在であり続けます。Singホールディングスの挑戦に、どうぞご期待ください。
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      株式会社Singホールディングス
                    </p>
                    <p className="text-sm text-gray-500">
                      代表取締役社長
                    </p>
                    <p className="text-2xl font-bold text-[#1C2A44] mt-2">
                      笠本　慎二
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ========================================
            会社概要セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <SectionTitleEntrance direction="left" className="mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                会社概要
              </h2>
            </SectionTitleEntrance>

            {/* テーブル */}
            <FadeInUp>
              <div className="max-w-4xl">
                <div className="bg-white">
                  {companyInfo.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] border-b border-gray-100 last:border-b-0"
                    >
                      <div className="py-5 px-6 bg-[#1C2A44] text-white font-medium text-sm">
                        {item.label}
                      </div>
                      <div className="py-5 px-6 text-gray-700 whitespace-pre-line text-sm">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ========================================
            アクセスセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <SectionTitleEntrance direction="scale" className="mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Access
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                アクセス
              </h2>
            </SectionTitleEntrance>

            {/* 地図 */}
            <FadeInUp>
              <div className="max-w-4xl">
                <div className="aspect-video overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52137.90942368853!2d136.93962445364178!3d35.24084486925477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d34a90f442ed77%3A0xcb8a4dd4798c1b0c!2z5qCq5byP5Lya56S-U2luZw!5e0!3m2!1sja!2sjp!4v1764254206752!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-6 text-gray-600">
                  <p className="font-medium text-[#1C2A44]">株式会社Singホールディングス</p>
                  <p className="mt-2">〒486-0918 愛知県春日井市如意申町７丁目15−５ アーバンハイツ春日井 302号</p>
                  <p className="mt-1 text-sm">勝川駅より車で8分</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
