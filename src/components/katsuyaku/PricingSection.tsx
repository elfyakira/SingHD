import FadeInUp from '@/components/animations/FadeInUp'
import { Check } from 'lucide-react'

export default function PricingSection() {
  return (
    <section className="py-16 lg:py-20 bg-warm-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-[800px] mx-auto">
            {/* 見出し */}
            <div className="text-center mb-10">
              <h2 className="text-[22px] lg:text-[32px] font-bold text-primary">
                料金について
              </h2>
              <div className="w-[60px] h-[3px] bg-accent-line mx-auto mt-4" />
            </div>

            {/* 本文 */}
            <div className="text-center mb-8">
              <p className="text-[15px] lg:text-base text-[#5C5C5C] leading-relaxed">
                カツヤクは、決まったパッケージプランを提供していません。
                <br className="hidden lg:block" />
                御社の業種・規模・課題に合わせて、完全にカスタマイズしたプロジェクトを設計します。
              </p>
              <p className="text-[15px] lg:text-base text-[#5C5C5C] leading-relaxed mt-4">
                まずは無料相談で御社の状況をお聞かせください。
                <br className="hidden lg:block" />
                課題の整理と、支援の方向性をご提案します。
              </p>
            </div>

            {/* 料金ボックス */}
            <div className="border border-primary rounded-lg bg-white p-8 text-center mb-8">
              <p className="text-sm text-[#5C5C5C] mb-2">料金</p>
              <p className="text-xl lg:text-2xl font-bold text-primary">
                御社の状況に合わせてご提案
              </p>
            </div>

            {/* 補足 */}
            <div className="space-y-3">
              {[
                '無料相談はオンラインで30分程度',
                '相談後の無理な営業は一切いたしません',
                '守秘義務を遵守します',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cta shrink-0" />
                  <p className="text-[15px] text-[#5C5C5C]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
