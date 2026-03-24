'use client'

import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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

        {/* ========================================
            コンセプトセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Concept
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                経営者の育成とバトンを繋ぐ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-600 leading-relaxed">
              <p>
                私は今までに多くの経営者の方とお会いしてきました。残念なことに立派な理念を掲げてるが行動をしていない経営者の多さに失望をしました。自らの欲を満たすことではなく、本当に実現したいことは何か？
              </p>
              <p>
                今の子供たちが、夢を見て叶えられる社会にしたい。
                様々な理由で選択肢を絞られるのではなく、その悩みすら周りの大人が協力して解決し続けたい。
              </p>
              <p>
                そして、地域や企業の課題解決をしていきながら、生まれた利益を次の世代に還元し続ける。
                そういう大人の姿を見せることで、子供が大人を尊敬できる。
                そして次の世代が子供の為に行動し続ける。
                この行動をし続けることで、純粋だけれど大事な気持ちの輪を広げ続けます。
              </p>
              <p>
                これは私1人では無理なので、同じ想いを持ち、還元に向けた行動をしてくれる仲間を増やすことで、この輪を広げ続けて、私が死んだ後もこの輪が次の世代に受け継がれるようにします。
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
            MVVセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Mission / Vision / Value
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                MVV
              </h2>
            </div>

            {/* MVV Cards */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Mission */}
              <div className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#1C2A44] flex items-center justify-center text-white">
                    <span className="text-lg font-bold">M</span>
                  </div>
                  <div>
                    <span className="text-[#1C2A44] font-bold text-xl">Mission</span>
                    <span className="text-gray-500 text-sm ml-2">ミッション</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  挑戦する人に、現実的な仕組みと環境を提供する。
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#0E7490] flex items-center justify-center text-white">
                    <span className="text-lg font-bold">V</span>
                  </div>
                  <div>
                    <span className="text-[#0E7490] font-bold text-xl">Vision</span>
                    <span className="text-gray-500 text-sm ml-2">ビジョン</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  起業が特別ではなく、選択肢の一つになる社会へ。
                </p>
              </div>

              {/* Value */}
              <div className="bg-white p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#34A853] flex items-center justify-center text-white">
                    <span className="text-lg font-bold">V</span>
                  </div>
                  <div>
                    <span className="text-[#34A853] font-bold text-xl">Value</span>
                    <span className="text-gray-500 text-sm ml-2">バリュー</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li><strong className="text-[#1C2A44]">Execution</strong> - 考えるより動く。行動で結果を出す。</li>
                  <li><strong className="text-[#1C2A44]">Ownership</strong> - 自分ごととして責任を持ち、最後までやり抜く。</li>
                  <li><strong className="text-[#1C2A44]">Speed</strong> - 素早く決断し、素早く実行する。</li>
                  <li><strong className="text-[#1C2A44]">Credibility</strong> - 誠実に、約束を守り、信頼を積み重ねる。</li>
                  <li><strong className="text-[#1C2A44]">Impact</strong> - 小さな成功より、大きな変化を生み出す。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            スローガンセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="mb-8">
              <span className="text-sm tracking-wider text-gray-400 uppercase">
                Slogan
              </span>
            </div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              夢を、ビジネスに。
            </p>
            <p className="text-lg md:text-xl text-gray-400 mt-4">
              Turn Your Vision Into Business.
            </p>
          </div>
        </section>

        {/* ========================================
            ロゴセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="mb-8">
              <span className="text-sm tracking-wider text-gray-500 uppercase">
                Logo
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              ロゴマーク
            </h2>
            <div className="max-w-sm mx-auto">
              <Image
                src="/singhdlogo512.png"
                alt="Singホールディングス ロゴ"
                width={320}
                height={320}
                className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
