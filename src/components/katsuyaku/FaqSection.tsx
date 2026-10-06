'use client'

import { useState } from 'react'
import FadeInUp from '@/components/animations/FadeInUp'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/katsuyaku-faqs'

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
