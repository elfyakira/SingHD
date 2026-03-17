'use client'

import { useState } from 'react'
import FadeInUp from '@/components/animations/FadeInUp'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '具体的にどのような支援をしてくれるのですか？',
    a: 'まず匿名ヒアリングで社員の本音と課題を可視化し、御社だけのプロジェクトを設計します。その後、管理職研修、グループディスカッション、カツヤク教材（全12章）を組み合わせ、採用→定着→戦力化まで一貫して伴走します。内容は御社の課題に応じて完全にカスタマイズします。',
  },
  {
    q: '従業員30名程度の小さな会社でも対応できますか？',
    a: 'はい。従業員30名〜200名規模の企業様を中心にご支援しています。むしろ規模が小さいほど変化のスピードが速く、成果が見えやすい傾向にあります。',
  },
  {
    q: 'うちは製造業（運送業・サービス業）ですが、業種的に対応可能ですか？',
    a: '製造業・運送業・サービス業をはじめ、幅広い業種でご支援実績があります。業種ごとの現場の空気感を理解した上で、その業種に合ったアプローチを設計します。',
  },
  {
    q: '費用はどのくらいかかりますか？',
    a: '御社の規模・課題・支援内容によって異なるため、一律の料金表はご用意していません。無料相談で状況をお聞きした上で、ご予算に合わせたプランをご提案します。中小企業の方にも現実的な費用感でご提供しています。',
  },
  {
    q: '支援期間はどのくらいですか？',
    a: '一般的には6ヶ月〜12ヶ月のプロジェクトが多いですが、課題の深さや目標によって変わります。「自走する組織」になることがゴールなので、支援が終わった後も成果が持続する設計にしています。',
  },
  {
    q: '他のコンサルティング会社と何が違うのですか？',
    a: '最も大きな違いは「現場に入り込む」スタイルです。多くのコンサルティングは外部から助言・指導する形ですが、私たちは御社の社員のように現場に入り、信頼関係の中から本音を引き出します。表向きの報告ではなく、事実ベースの課題を可視化して改善を進めます。',
  },
  {
    q: 'まずは話を聞くだけでも大丈夫ですか？',
    a: 'もちろんです。無料相談は「まず話を聞きたい」という方のためにご用意しています。御社の状況をお聞きし、課題の整理と方向性をお伝えするだけでも構いません。相談後の無理な営業は一切いたしません。',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 見出し */}
        <FadeInUp>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[32px] font-bold text-primary">
              よくあるご質問
            </h2>
            <div className="w-[60px] h-[3px] bg-accent-line mx-auto mt-4" />
          </div>
        </FadeInUp>

        {/* FAQ */}
        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <FadeInUp key={index} delay={index * 50}>
              <div className="border-b border-[#E5E5E5]">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-4 py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-bold text-cta shrink-0">Q</span>
                  <span className="text-[15px] lg:text-base font-bold text-foreground flex-1">
                    {faq.q}
                  </span>
                  <span className="text-cta shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-200 ease-out"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="flex gap-4 pb-5">
                    <span className="text-base font-bold text-primary shrink-0">A</span>
                    <p className="text-[14px] lg:text-[15px] text-[#5C5C5C] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
