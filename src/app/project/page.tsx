'use client'

import { ExternalLink } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/layout/ContactCTA'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

// グループ会社データ
const groupCompanies = [
  {
    id: 'consulting',
    category: '企業コンサルティング業',
    categoryEn: 'Consulting',
    name: '株式会社Sing',
    nameEn: 'Sing Inc.',
    logo: '/img/company/singlogo.png',
    photo: '/img/company/singphoto.jpg',
    description:
      '株式会社Singは、人財コンサルティングと採用支援を通じて、企業の成長と次世代リーダーの育成に貢献する会社です。企業の組織課題を解決し、最適な人財配置や育成戦略を提供することで、持続的な成長をサポートします。Singのサービスは、単なる採用代行ではなく、企業の未来を見据えた戦略的な人財支援を実現します。',
    businessContent:
      '人材確保支援、人事・組織コンサルティング、定着率向上支援、営業支援',
    website: 'https://www.singgroup.biz/',
    sns: {
      instagram: 'https://www.instagram.com/sing.co.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      tiktok: 'https://www.tiktok.com/@sing.co.ltd?is_from_webapp=1&sender_device=pc',
      youtube: 'https://www.youtube.com/@Sing.K.K',
    },
    color: 'green',
  },
  {
    id: 'hr',
    category: '人財コンサルティング業',
    categoryEn: 'Human Resources',
    name: '株式会社フライトップ',
    nameEn: 'Flytop Inc.',
    logo: '/img/company/flytoplogo.png',
    photo: '/img/company/flytopphoto.JPG',
    description:
      '株式会社フライトップは、愛知県を拠点に名古屋・尾張・三河・岐阜エリアで製造業に特化した人財派遣サービスを提供しています。製造業出身の経験を活かし、現場に即した最適な人財を企業に紹介。若手技術者の育成や即戦力の確保をサポートし、企業の成長と地域経済の発展に貢献します。地域密着で未経験者から技術職まで幅広く対応し、柔軟で安心のサポート体制を整えています。',
    businessContent: '労働者派遣事業、有料職業紹介事業',
    website: 'https://www.flytop.biz/',
    sns: {},
    color: 'green',
  },
  {
    id: 'branding',
    category: '企業ブランディング事業',
    categoryEn: 'Branding',
    name: '株式会社ゆめスタ',
    nameEn: 'Yumesuta Inc.',
    logo: '/img/company/yumesutalogo.png',
    photo: '/img/company/yumesutaimg.jpg',
    description:
      '株式会社ゆめスタは、「夢をスタートして叶えるプロジェクト」として、若者と企業・地域をつなぎ、未来を創る支援を行う会社です。高校生向け就活情報誌や採用支援、企業ブランディング、地域や学校との連携を通じて、若者が「夢を見つけ」「挑戦できる」環境を創ります。ゆめスタは"夢もキャリアも、選択肢はひとつじゃない"という信念をもとに、"夢を持たない人"にも"夢を追う人"にも、仕事や成長のチャンスを丁寧に届け、次世代が笑顔で活躍できる社会の実現に貢献します。',
    businessContent:
      '経営コンサルティング業務、マーケティングリサーチ業務、人材育成コンサルティング業務、スポーツビジネス支援、広告代理業、イベント企画・制作・運営、Webサイト企画・制作・販売・運営',
    website: 'https://yumesuta.com/',
    sns: {
      instagram: 'https://www.instagram.com/yumesuta_co.ltd/',
    },
    color: 'green',
  },
  {
    id: 'media',
    category: '企業ブランディング事業',
    categoryEn: 'Media',
    name: '株式会社Singメディア',
    nameEn: 'Sing Media Inc.',
    logo: '',
    photo: '/img/company/media.JPG',
    description:
      '株式会社Singメディアは、月刊Singをはじめとするメディアコンテンツを通じて、企業のブランディングや採用活動を支援する会社です。企業の挑戦や価値を取材・編集し、紙・デジタル両面で発信。読者に企業の魅力を正確に伝えることで、採用力や認知向上を高め、企業成長に貢献します。Singメディアは、情報発信を通じて社会とビジネスの発展に寄与することを使命としています。',
    businessContent:
      '月刊Singの企画・発行、コンテンツ制作・編集、企業ブランディング支援、採用支援サービス、デジタル・オンラインメディア運営',
    website: '',
    sns: {},
    color: 'green',
  },
]

export default function ProjectPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: siteConfig.siteUrl || '/' },
    { name: 'グループ会社紹介', url: `${siteConfig.siteUrl}/project` },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <LowPageHero
          titleEn="Project"
          titleJa="グループ会社紹介"
          imageSrc="/img/project/group-hero.jpg"
        />

        {/* Intro Text */}
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2">
            事業を複合的に加速させ、
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            確かな未来図を描く「ホールディングス」。
          </p>
        </div>

        {/* Companies List */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            {groupCompanies.map((company, index) => (
              <article
                key={company.id}
                className={`py-12 md:py-16 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                  {/* Left: Company Info */}
                  <div className="relative">
                    <div className="relative z-10">
                      {/* Category Header */}
                      <div className="text-center mb-8">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">
                          {company.category}
                        </h2>
                        <div
                          className={`w-16 h-1 mx-auto ${company.color === 'green' ? 'bg-[#22c55e]' : 'bg-blue-500'}`}
                        />
                      </div>

                      {/* Company Logo */}
                      <div className="h-16 md:h-20 flex items-center justify-center mb-6 mx-auto">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={`${company.name} ロゴ`}
                            className="max-h-full max-w-[180px] md:max-w-[200px] object-contain"
                          />
                        ) : (
                          <span className="text-xl md:text-2xl font-bold text-gray-800">
                            {company.name}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                        {company.description}
                      </p>

                      {/* Company Details */}
                      <div className="space-y-4">
                        <div className="flex border-t border-gray-200 pt-4">
                          <span className="w-24 text-[#22c55e] font-medium flex-shrink-0 text-sm">
                            事業内容
                          </span>
                          <span className="text-gray-700 text-sm">
                            {company.businessContent}
                          </span>
                        </div>
                        <div className="flex border-t border-gray-200 pt-4">
                          <span className="w-24 text-[#22c55e] font-medium flex-shrink-0 text-sm">
                            ホームページ
                          </span>
                          {company.website ? (
                            <a
                              href={company.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline flex items-center gap-1 text-sm break-all"
                            >
                              {company.website}
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          ) : (
                            <span className="text-gray-500 text-sm">準備中</span>
                          )}
                        </div>
                        <div className="flex border-t border-b border-gray-200 py-4">
                          <span className="w-24 text-[#22c55e] font-medium flex-shrink-0 text-sm">
                            公式SNS
                          </span>
                          {Object.keys(company.sns).length > 0 ? (
                            <div className="flex gap-4">
                              {company.sns.instagram && (
                                <a
                                  href={company.sns.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                                >
                                  <img
                                    src="/img/logo/Instagram_Glyph_Gradient.png"
                                    alt="Instagram"
                                    className="w-8 h-8"
                                  />
                                </a>
                              )}
                              {company.sns.tiktok && (
                                <a
                                  href={company.sns.tiktok}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                                >
                                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                  </svg>
                                </a>
                              )}
                              {company.sns.youtube && (
                                <a
                                  href={company.sns.youtube}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                                >
                                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-red-600">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                  </svg>
                                </a>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-500 text-sm">-</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                      {company.photo ? (
                        <img
                          src={company.photo}
                          alt={`${company.name} イメージ`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-end justify-end p-6 md:p-8 bg-gradient-to-br from-gray-200 to-gray-300">
                          <span className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-white/80">
                            {company.categoryEn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <ContactCTA />
      <Footer />
    </>
  )
}
