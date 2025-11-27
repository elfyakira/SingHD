'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/layout/ContactCTA'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import {
  generateBreadcrumbSchema,
  generateAboutPageSchema,
  generateOrganizationSchema,
} from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

export default function CompanyPage() {
  const [activeSection, setActiveSection] = useState('message')

  // アクティブセクションの検出
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['message', 'overview']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl || '/' },
      { name: '会社概要', url: `${siteConfig.siteUrl}/company` },
    ]),
    generateAboutPageSchema(),
    generateOrganizationSchema(),
  ]

  const companyInfo = [
    { label: '企業名', value: '株式会社Singホールディングス' },
    { label: '代表', value: '笠本慎二' },
    {
      label: '事業内容',
      value: '企業ブランディング支援\n人財コンサルティング・採用支援\nメディア・出版事業（例：月刊Sing）\nグループ会社の経営管理、ならびにそれに付随する業務',
    },
    { label: '設立', value: '2026年3月1日' },
    { label: '資本金', value: '300万円' },
    {
      label: '所在地',
      value: '〒486-0918\n愛知県春日井市如意申町７丁目15−５ アーバンハイツ春日井 302号',
    },
    { label: 'アクセス', value: '勝川駅より車で8分' },
  ]

  // スムーズスクロール
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

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

        {/* Main Content with Side Navigation */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Side Navigation (Desktop) */}
            <aside className="hidden lg:block w-48 shrink-0">
              <nav className="side-nav">
                <ul className="space-y-0 border-l border-gray-200 pl-6">
                  <li>
                    <a
                      href="#message"
                      onClick={(e) => { e.preventDefault(); scrollToSection('message') }}
                      className={activeSection === 'message' ? 'active' : ''}
                    >
                      代表挨拶
                    </a>
                  </li>
                  <li>
                    <a
                      href="#overview"
                      onClick={(e) => { e.preventDefault(); scrollToSection('overview') }}
                      className={activeSection === 'overview' ? 'active' : ''}
                    >
                      会社概要
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* CEO Message Section */}
              <section id="message" className="pb-16 scroll-mt-24">
                <h2 className="text-xl font-medium mb-8 pb-4 border-b border-gray-200">
                  代表挨拶
                </h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* CEO Image */}
                  <div className="relative">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src="/img/company/ceo.jpg"
                        alt="代表取締役"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                      次世代の笑顔のために、
                      <br />
                      今を動かす
                    </h3>
                    <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
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

                    <div className="mt-8 text-right">
                      <p className="text-sm text-gray-500">
                        株式会社Singホールディングス
                      </p>
                      <p className="text-sm font-medium text-gray-700">
                        代表取締役社長
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        笠本　慎二
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Company Overview Section */}
              <section id="overview" className="py-16 scroll-mt-24">
                <h2 className="text-xl font-medium mb-8 pb-4 border-b border-gray-200">
                  会社概要
                </h2>

                <div className="bg-white">
                  <table className="w-full">
                    <tbody>
                      {companyInfo.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <th className="py-5 px-4 text-left text-[#ea5506] font-medium w-28 md:w-36 align-top text-sm">
                            {item.label}
                          </th>
                          <td className="py-5 px-4 text-gray-700 whitespace-pre-line text-sm">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Google Map */}
                  <div className="mt-8">
                    <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
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
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <ContactCTA />
      <Footer />
    </>
  )
}
