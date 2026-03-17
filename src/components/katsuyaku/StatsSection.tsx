'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface CountUpProps {
  target: number
  suffix?: string
  duration?: number
}

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const startTime = performance.now()
    let animationId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, target, duration])

  return count
}

const stats = [
  {
    industry: '製造業 A社',
    label: '離職率',
    before: 22,
    after: 9,
    unit: '%',
  },
  {
    industry: '運送業 B社',
    label: '離職率',
    before: 30,
    after: 12,
    unit: '%',
  },
  {
    industry: 'サービス業 C社',
    label: '定着率',
    before: 85,
    after: 95,
    unit: '%',
  },
]

const subStats = [
  { label: '生産性向上', value: '最大18%', sub: '改善' },
  { label: '売上', value: '前年比115%', sub: '達成' },
]

function StatCard({
  stat,
  isVisible,
  delay,
}: {
  stat: (typeof stats)[0]
  isVisible: boolean
  delay: number
}) {
  const afterCount = useCountUp(stat.after, isVisible, 2000)

  return (
    <div
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      <span className="inline-block text-xs lg:text-sm text-cta font-medium tracking-wider mb-3">
        {stat.industry}
      </span>
      <p className="text-sm text-white/60 mb-2">{stat.label}</p>
      <div className="flex items-baseline justify-center gap-2 lg:gap-3">
        <span className="text-2xl lg:text-[32px] font-bold text-white/40">
          {stat.before}
          <span className="text-lg">{stat.unit}</span>
        </span>
        <span className="text-xl lg:text-2xl text-accent-line">→</span>
        <span className="text-[42px] lg:text-[64px] font-bold text-white leading-none">
          {isVisible ? afterCount : 0}
          <span className="text-xl lg:text-2xl">{stat.unit}</span>
        </span>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 見出し */}
        <div
          className="text-center mb-12 lg:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h2 className="text-[22px] lg:text-[32px] font-bold text-white">
            数字が証明する、組織の変化。
          </h2>
          <div className="w-[60px] h-[3px] bg-accent-line mx-auto mt-4" />
        </div>

        {/* 実績3つ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.industry}>
              <StatCard stat={stat} isVisible={isVisible} delay={index * 200} />
              {index < stats.length - 1 && (
                <div className="block lg:hidden w-full h-px bg-white/15 mt-8" />
              )}
            </div>
          ))}
        </div>

        {/* 補足数値 */}
        <div className="flex justify-center gap-8 lg:gap-16 mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/15 max-w-2xl mx-auto">
          {subStats.map((sub) => (
            <div
              key={sub.label}
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease-out 0.8s',
              }}
            >
              <p className="text-sm text-white/60 mb-1">{sub.label}</p>
              <p className="text-2xl lg:text-[32px] font-bold text-accent-line">
                {sub.value}
              </p>
              <p className="text-xs text-white/50 mt-1">{sub.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12 lg:mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 1s',
          }}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 bg-cta text-white px-8 lg:px-10 py-4 rounded-lg font-bold text-base hover:bg-cta-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            御社でも、この変化を。無料相談はこちら
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[13px] text-white/60 mt-3">
            導入企業の詳しい事例もお伝えします
          </p>
        </div>
      </div>
    </section>
  )
}
