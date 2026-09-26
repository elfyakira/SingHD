'use client'

import Link from 'next/link'
import Image from '@/components/QImage'
import type { LucideIcon } from 'lucide-react'
import {
  ExternalLink,
  Users,
  Building2,
  Handshake,
  Network,
  Lightbulb,
  HeartPulse,
  GraduationCap,
  Sprout,
  MapPin,
  Leaf,
  Settings,
  BarChart3,
  Monitor,
  UserCheck,
  TrendingUp,
  Mic,
  Award,
  Newspaper,
  Rocket,
  Megaphone,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import FadeInUp from '@/components/animations/FadeInUp'
import SectionTitleEntrance from '@/components/animations/SectionTitleEntrance'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

type BusinessItem = {
  title: string
  desc: string
  icon: LucideIcon
}

type Company = {
  id: string
  name: string
  category: string
  items: [BusinessItem, BusinessItem]
  logo?: string
  website?: string
  internal?: boolean
  icon: LucideIcon
}

type DomainColor = {
  text: string
  underline: string
  navHover: string
  bandBg: string
  frameBg: string
  frameBorder: string
}

type Domain = {
  id: string
  no: string
  name: string
  subcopy: string
  icon: LucideIcon
  color: DomainColor
  bgImage: string
  companies: Company[]
}

const DOMAIN_COLORS: Record<'blue' | 'green' | 'purple', DomainColor> = {
  blue: {
    text: 'text-[#2563EB]',
    underline: 'border-[#2563EB]',
    navHover: 'hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]',
    bandBg: 'bg-[#2563EB]',
    frameBg: 'bg-[#EFF4FF]',
    frameBorder: 'border-[#BFD7FB]',
  },
  green: {
    text: 'text-[#15803D]',
    underline: 'border-[#15803D]',
    navHover: 'hover:border-[#15803D] hover:text-[#15803D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#15803D]',
    bandBg: 'bg-[#15803D]',
    frameBg: 'bg-[#EEF8F1]',
    frameBorder: 'border-[#BFE3CB]',
  },
  purple: {
    text: 'text-[#7C3AED]',
    underline: 'border-[#7C3AED]',
    navHover: 'hover:border-[#7C3AED] hover:text-[#7C3AED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]',
    bandBg: 'bg-[#7C3AED]',
    frameBg: 'bg-[#F5F0FF]',
    frameBorder: 'border-[#DCC9FA]',
  },
}

// Singグループ 3領域 × 9社・法人
// 正式URL・ロゴが確認できない会社・法人は、推測せずリンク/ロゴなしで掲載
const domains: Domain[] = [
  {
    id: 'keiei-hr',
    no: '01',
    name: '経営統括＆HR・人材',
    subcopy: '企業の成長を支える、人と組織の基盤をつくる',
    bgImage: '/img/project/bg-keiei-hr.jpg',
    icon: Users,
    color: DOMAIN_COLORS.blue,
    companies: [
      {
        id: 'singhd',
        name: '株式会社Singホールディングス',
        category: '経営・基盤',
        icon: Building2,
        logo: '/img/logo/logo.png',
        website: '/company',
        internal: true,
        items: [
          {
            title: 'バックオフィス支援',
            desc: 'グループ各社の総務・財務・人事を横断的に集約・最適化',
            icon: Settings,
          },
          {
            title: '経営者育成支援',
            desc: '次世代リーダー・将来の事業責任者を育成・伴走',
            icon: BarChart3,
          },
        ],
      },
      {
        id: 'sing',
        name: '株式会社Sing',
        category: '採用＆メディア',
        icon: Users,
        logo: '/img/company/singlogo.png',
        website: 'https://www.singgroup.biz/',
        items: [
          {
            title: '採用・定着・活躍支援',
            desc: '定着・活躍・リファラル採用までを一貫して伴走',
            icon: Users,
          },
          {
            title: 'クリエイティブ制作・運用',
            desc: '採用HP、PR動画、SNSの企画・制作から運用まで対応',
            icon: Monitor,
          },
        ],
      },
      {
        id: 'flytop',
        name: '株式会社フライトップ',
        category: '総合人材サービス',
        icon: Handshake,
        logo: '/img/company/flytoplogo.png',
        website: 'https://www.flytop.biz/',
        items: [
          {
            title: '人材派遣事業',
            desc: '企業の即戦力ニーズに応える最適な人材マッチングと派遣',
            icon: Handshake,
          },
          {
            title: '人材紹介事業',
            desc: '企業の成長フェーズに合わせた専門人材・適正人材の転職支援',
            icon: UserCheck,
          },
        ],
      },
    ],
  },
  {
    id: 'soshiki-brand-kenko',
    no: '02',
    name: '組織・ブランド・健康経営',
    subcopy: '人と組織の力で、持続的に選ばれる企業へ',
    bgImage: '/img/project/bg-soshiki-brand-kenko.jpg',
    icon: Leaf,
    color: DOMAIN_COLORS.green,
    companies: [
      {
        id: 'singnext',
        name: '株式会社Sing.nexT',
        category: '組織変革',
        icon: Network,
        logo: '/img/company/singnextlogo.png',
        website: 'https://sing-next.com/',
        items: [
          {
            title: '組織コンサルティング支援',
            desc: '組織課題の抽出・構造改革をプロデュース',
            icon: Network,
          },
          {
            title: 'エンゲージメント向上',
            desc: '持続的成長を支える評価制度設計・浸透支援',
            icon: TrendingUp,
          },
        ],
      },
      {
        id: 'bizrea',
        name: '株式会社Bizreaメディア',
        category: 'ブランディング',
        icon: Lightbulb,
        logo: '/img/company/bizrealogo.png',
        website: 'https://www.bizrea.net/',
        items: [
          {
            title: '総合ブランディング支援',
            desc: '企業の独自価値を最大化する戦略立案・実行',
            icon: Lightbulb,
          },
          {
            title: 'アーティスト×代表者対談',
            desc: '感性と理念が交差するオリジナルインタビュー企画',
            icon: Mic,
          },
        ],
      },
      {
        id: 'vitalcore',
        name: '株式会社Vital core',
        category: '健康経営',
        icon: HeartPulse,
        logo: '/img/company/vitalcorelogo.png',
        website: 'https://vitalcore.jp/',
        items: [
          {
            title: '健康支援伴走コンサルティング',
            desc: '社員の心身の健康と組織活性を支援',
            icon: HeartPulse,
          },
          {
            title: '健康経営アドバイザー・採用支援',
            desc: '健康優良法人の取得や採用差別化戦略を支援',
            icon: Award,
          },
        ],
      },
    ],
  },
  {
    id: 'jisedai-chiiki',
    no: '03',
    name: '次世代育成＆地域共創',
    subcopy: '次の世代へ、地域の未来へ、挑戦がつながる社会をつくる',
    bgImage: '/img/project/bg-jisedai-chiiki.jpg',
    icon: GraduationCap,
    color: DOMAIN_COLORS.purple,
    companies: [
      {
        id: 'yumesuta',
        name: '株式会社ゆめスタ',
        category: '高校生・教育',
        icon: GraduationCap,
        logo: '/img/company/yumesutalogo.png',
        website: 'https://yumesuta.com/',
        items: [
          {
            title: '高校生採用・高校開拓コンサル',
            desc: '高校との連携による高卒採用の最適化',
            icon: GraduationCap,
          },
          {
            title: '月刊誌発行＆スポーツ支援',
            desc: '高校40校への情報発信、スポーツビジネス支援',
            icon: Newspaper,
          },
        ],
      },
      {
        id: 'yumesuta-partners',
        name: '一般社団法人ゆめスタパートナーズ',
        category: '挑戦支援',
        icon: Sprout,
        logo: '/img/company/yumesutapartnerslogo.png',
        website: 'https://yumesuta-partners.com/',
        items: [
          {
            title: '若者・高校生のスタート支援',
            desc: '一歩を踏み出し、夢に挑戦できる場づくり',
            icon: Sprout,
          },
          {
            title: '地域企業のスタート支援',
            desc: '若者の挑戦エネルギーと企業変革を接続',
            icon: Rocket,
          },
        ],
      },
      {
        id: 'kasugai',
        name: '一般社団法人 春日井つながる未来協会',
        category: '地域共創プロジェクト',
        icon: MapPin,
        logo: '/img/company/kasugailogo.png',
        website: 'https://tsunamira.group/',
        items: [
          {
            title: '子ども・教育・部活動支援',
            desc: '企業協賛パートナーシップの運営',
            icon: Users,
          },
          {
            title: '地域活性イベント・情報発信',
            desc: '月刊Sing春日井の発行や地域メディア情報発信',
            icon: Megaphone,
          },
        ],
      },
    ],
  },
]

export default function ProjectPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: siteConfig.siteUrl || '/' },
    { name: 'Singグループ紹介', url: `${siteConfig.siteUrl}/project` },
  ])

  const handleDomainNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Header />

      <main className="pt-20">
        {/* ========================================
            SECTION 1：ページタイトル
           ======================================== */}
        <LowPageHero
          titleEn="SING GROUP"
          titleJa="Singグループ紹介"
          imageSrc="/img/project/group-hero.jpg"
        />

        {/* ========================================
            SECTION 2：グループ理念・導入
           ======================================== */}
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <Image
              src="/img/project/bg-philosophy.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <SectionTitleEntrance direction="scale" className="text-center max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
                人の可能性で、
                <br />
                社会をもっと豊かに。
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                採用・組織づくり・ブランディング・健康経営・次世代育成まで。
                <br />
                Singグループは、
                <mark className="bg-[#FFF3B0] text-[#1A1A1A] px-1">
                  企業と地域の成長を多面的に支援します。
                </mark>
              </p>
              <p className="text-sm md:text-base font-medium text-gray-500 tracking-wide">
                9つの会社・法人が、
                <span className="text-[#1A1A1A] font-bold">3つの領域</span>
                で価値を創出
              </p>
            </SectionTitleEntrance>

            {/* 3領域ナビ */}
            <FadeInUp delay={200} className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {domains.map((domain) => (
                <a
                  key={domain.id}
                  href={`#${domain.id}`}
                  onClick={(e) => handleDomainNavClick(e, domain.id)}
                  className={`flex items-center gap-3 border border-gray-200 px-5 py-4 transition-colors ${domain.color.navHover}`}
                >
                  <domain.icon className={`w-5 h-5 flex-shrink-0 ${domain.color.text}`} />
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    {domain.name}
                  </span>
                </a>
              ))}
            </FadeInUp>
          </div>
        </section>

        {/* ========================================
            SECTION 3〜4：3領域 × 9社・法人
           ======================================== */}
        {domains.map((domain, domainIndex) => (
          <section
            key={domain.id}
            id={domain.id}
            className={`relative scroll-mt-24 lg:scroll-mt-28 py-20 lg:py-28 overflow-hidden ${
              domainIndex % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'
            }`}
          >
            <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
              <Image
                src={domain.bgImage}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative container mx-auto px-4 lg:px-8">
              <SectionTitleEntrance
                direction={domainIndex % 2 === 0 ? 'left' : 'right'}
                className="mb-12 lg:mb-16"
              >
                <div className="mb-4">
                  <span className="text-sm tracking-wider text-gray-500 uppercase">
                    Area {domain.no}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div
                    className={`inline-flex w-fit flex-shrink-0 items-center gap-3 rounded-full py-2.5 pl-4 pr-5 text-white ${domain.color.bandBg}`}
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                      <domain.icon className="h-4 w-4" />
                    </span>
                    <h2 className="whitespace-nowrap text-base font-bold md:text-lg">
                      {domain.name}
                    </h2>
                    <span className="whitespace-nowrap rounded-full bg-white/25 px-2.5 py-1 text-xs font-medium">
                      {domain.companies.length}社
                    </span>
                  </div>
                  <div className="flex min-w-0 items-center gap-4 md:flex-1">
                    <span
                      className="hidden h-px flex-1 bg-gray-300 md:block"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-gray-600 md:text-base">{domain.subcopy}</p>
                  </div>
                </div>
              </SectionTitleEntrance>

              <FadeInUp>
                <div
                  className={`grid overflow-hidden rounded-xl border md:grid-cols-2 lg:grid-cols-3 ${domain.color.frameBorder} ${domain.color.frameBg}`}
                >
                  {domain.companies.map((company, i) => (
                    <div
                      key={company.id}
                      className={`flex flex-col p-6 md:p-8 ${
                        i > 0
                          ? `border-t lg:border-t-0 lg:border-l ${domain.color.frameBorder}`
                          : ''
                      }`}
                    >
                      {/* ロゴ / アイコン */}
                      <div className="h-14 flex items-center mb-5">
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={`${company.name} ロゴ`}
                            width={160}
                            height={56}
                            loading="eager"
                            className="max-h-full max-w-[160px] object-contain"
                          />
                        ) : (
                          <div className="flex items-center gap-2.5">
                            <company.icon className={`w-6 h-6 ${domain.color.text}`} />
                            <span className="text-xs text-gray-400">
                              ロゴ準備中
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 社名・法人名＋カテゴリ */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h3 className="text-base md:text-lg font-bold text-[#1A1A1A]">
                          {company.name}
                        </h3>
                        <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm">
                          {company.category}
                        </span>
                      </div>

                      {/* 事業内容 */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {company.items.map((item) => (
                          <li key={item.title} className="flex gap-2 text-sm">
                            <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${domain.color.text}`} />
                            <span>
                              <span className="font-medium text-[#1A1A1A]">
                                {item.title}
                              </span>
                              <br />
                              <span className="text-gray-600">{item.desc}</span>
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      {company.website ? (
                        company.internal ? (
                          <Link
                            href={company.website}
                            className="mt-auto w-fit inline-flex items-center gap-1.5 text-sm font-medium text-[#0E7490] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0E7490]"
                          >
                            詳しく見る
                          </Link>
                        ) : (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto w-fit inline-flex items-center gap-1.5 text-sm font-medium text-[#0E7490] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0E7490]"
                          >
                            詳しく見る
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )
                      ) : (
                        <span className="mt-auto text-sm text-gray-400">準備中</span>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </section>
        ))}

        {/* ========================================
            SECTION 5：グループシナジー
           ======================================== */}
        <section className="relative py-20 lg:py-28 bg-white border-t border-gray-100 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
            <Image
              src="/img/project/bg-philosophy.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <SectionTitleEntrance direction="scale" className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                企業の採用・定着・活躍支援から、
                <br />
                地域共創・次世代育成まで。
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Singグループは、企業ごとに独立したサービスを提供するだけではありません。
                <br className="hidden md:block" />
                採用、人材、組織、ブランディング、健康経営、教育、地域支援の専門性をつなぎ、お客様の課題に対してグループ全体で最適な支援を組み立てます。
              </p>
            </SectionTitleEntrance>

            <FadeInUp className="text-center mb-14">
              <span className="inline-block bg-[#FFF3B0] text-[#1A1A1A] font-bold text-lg md:text-xl px-6 py-3">
                Singグループが、一気通貫でサポートします。
              </span>
            </FadeInUp>

            <FadeInUp
              delay={150}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-3xl mx-auto"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#2563EB] flex items-center justify-center text-center px-2 flex-shrink-0">
                <span className="text-sm md:text-base font-bold text-[#2563EB] leading-snug">
                  企業の
                  <br />
                  成長
                </span>
              </div>
              <span className="text-2xl text-gray-300 font-light" aria-hidden="true">
                ×
              </span>
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#15803D] flex items-center justify-center text-center px-2 flex-shrink-0">
                <span className="text-sm md:text-base font-bold text-[#15803D] leading-snug">
                  人の
                  <br />
                  可能性
                </span>
              </div>
              <span className="text-2xl text-gray-300 font-light" aria-hidden="true">
                ×
              </span>
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#7C3AED] flex items-center justify-center text-center px-2 flex-shrink-0">
                <span className="text-sm md:text-base font-bold text-[#7C3AED] leading-snug">
                  地域の
                  <br />
                  未来
                </span>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ========================================
            SECTION 6：最終CTA
           ======================================== */}
        <section className="relative py-20 lg:py-28 bg-[#0A0A0A] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <Image
              src="/img/project/bg-jisedai-chiiki.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <FadeInUp className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                どの会社に相談すればよいか分からなくても、
                <br />
                まずはSingグループへご相談ください。
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                現在のお悩みを伺い、グループの中から最適な会社・サービスをご案内します。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1A1A] font-medium px-8 py-4 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:ring-white"
              >
                無料相談を予約する
              </Link>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
