'use client'

import FadeInUp from '@/components/animations/FadeInUp'
import { ArrowRight } from 'lucide-react'

const benefits = [
  {
    num: '01',
    title: '離職が止まる',
    description:
      '独自のヒアリング手法「アスイロ」で個人特性を可視化。一人ひとりに合った関わり方が分かるから、「なぜ辞めるのか」ではなく「どうすれば残るのか」が見えてきます。',
    imageAlt: 'コンサルタントが社員と1対1で向き合い対話している場面',
  },
  {
    num: '02',
    title: '人が育つ',
    description:
      '全12章の体系的な教材と、管理職研修・グループディスカッションで「教え方が分からない」管理職を、育てられる管理職に変えます。',
    imageAlt: '管理職がグループディスカッションをしている場面',
  },
  {
    num: '03',
    title: '組織が自走する',
    description:
      '一時的な改善で終わらせません。採用→定着→戦力化まで一貫伴走し、支援が終わった後も成長し続ける組織をつくります。',
    imageAlt: '現場リーダーがチームに説明をしている場面',
  },
]

export default function SolutionSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 見出し + リード */}
        <FadeInUp>
          <div className="text-center max-w-[800px] mx-auto mb-14 lg:mb-20">
            <h2 className="text-[22px] lg:text-[32px] font-bold text-primary mb-6">
              「カツヤク」── 現場で一緒に、組織を変える。
            </h2>
            <p className="text-[15px] lg:text-base text-[#5C5C5C] leading-relaxed">
              カツヤクは、外から助言するコンサルティングではありません。
              <br className="hidden lg:block" />
              御社の現場に入り込み、社員一人ひとりの本音を引き出し、
              <br className="hidden lg:block" />
              「人が辞めない・育つ・活躍する」組織を一緒につくるプロジェクトです。
            </p>
          </div>
        </FadeInUp>

        {/* ベネフィット3つ */}
        <div className="max-w-5xl mx-auto space-y-16 lg:space-y-20">
          {benefits.map((benefit, index) => (
            <FadeInUp key={benefit.num} delay={index * 150}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* 写真プレースホルダー */}
                <div className="w-full lg:w-[45%] shrink-0">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(/img/katsuyaku/benefit-${benefit.num}.jpg)`,
                        backgroundColor: '#E8E4DF',
                      }}
                    />
                  </div>
                </div>

                {/* テキスト */}
                <div className="w-full lg:w-[55%]">
                  <span className="text-[48px] lg:text-[64px] font-bold text-cta/20 leading-none">
                    {benefit.num}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary -mt-3 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] lg:text-base text-foreground leading-[1.8]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA */}
        <FadeInUp delay={500}>
          <SolutionCTA onClick={scrollToContact} />
        </FadeInUp>
      </div>
    </section>
  )
}

function SolutionCTA({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-center mt-14 lg:mt-20">
      <button
        onClick={onClick}
        className="group inline-flex items-center gap-3 bg-cta text-white px-8 lg:px-10 py-4 rounded-lg font-bold text-base hover:bg-cta-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
      >
        カツヤクの詳細を聞いてみる
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="text-[13px] text-[#5C5C5C] mt-3">
        無料相談 ｜ オンラインで30分、御社の課題をお聞かせください
      </p>
    </div>
  )
}
