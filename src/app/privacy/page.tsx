'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import FadeInUp from '@/components/animations/FadeInUp'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

const EFFECTIVE_DATE = '2025年11月28日'

const h2Class = 'text-xl md:text-2xl font-bold text-gray-900 mt-12 mb-4'
const pClass = 'text-sm md:text-base text-gray-700 leading-[1.9] mb-6'

export default function PrivacyPage() {
  const { company } = siteConfig

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl || '/' },
      { name: 'プライバシーポリシー', url: `${siteConfig.siteUrl}/privacy` },
    ]),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main className="pt-20">
        <LowPageHero
          titleEn="Privacy Policy"
          titleJa="プライバシーポリシー"
          imageSrc="/img/company/company-hero.jpg"
        />

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <p className={pClass}>
                {company.name}（以下、「当社」）は、お客様の個人情報を適切に保護することを重要な社会的責務と認識し、以下のとおり個人情報保護方針を定め、これを遵守いたします。
              </p>

              <h2 className={h2Class}>1. 個人情報の定義</h2>
              <p className={pClass}>
                個人情報とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。
              </p>

              <h2 className={h2Class}>2. 個人情報の収集</h2>
              <p className={pClass}>
                当社は、お問い合わせフォーム、採用エントリーフォーム、ミライクのお申し込みフォーム等を通じて、お客様の個人情報を収集することがあります。収集に際しては、利用目的を明示し、適法かつ公正な手段により行います。
              </p>

              <h2 className={h2Class}>3. 個人情報の利用目的</h2>
              <p className="text-sm md:text-base text-gray-700 leading-[1.9] mb-4">
                当社は、収集した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base text-gray-700 leading-[1.9] mb-6 space-y-2">
                <li>お問い合わせへの回答</li>
                <li>採用選考に関するご連絡</li>
                <li>当社およびグループ会社のサービスに関する情報のご提供</li>
                <li>その他、お客様との契約・取引に関する業務</li>
              </ul>

              <h2 className={h2Class}>4. 個人情報の第三者提供</h2>
              <p className={pClass}>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>

              <h2 className={h2Class}>5. 個人情報の安全管理</h2>
              <p className={pClass}>
                当社は、個人情報の漏洩、滅失、毀損を防止するため、必要かつ適切な安全管理措置を講じます。
              </p>

              <h2 className={h2Class}>6. 個人情報の開示・訂正・削除</h2>
              <p className={pClass}>
                お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人確認のうえ、適切に対応いたします。
              </p>

              <h2 className={h2Class}>7. お問い合わせ</h2>
              <p className={pClass}>
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="bg-gray-50 p-6 text-sm md:text-base text-gray-700 leading-[1.9]">
                <p>{company.name}</p>
                <p>
                  〒{company.postalCode} {company.address}
                </p>
                {company.phone && <p>TEL: {company.phone}</p>}
                <p>メール: {company.email}</p>
              </div>

              <p className="text-sm text-gray-500 mt-10">制定日: {EFFECTIVE_DATE}</p>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
