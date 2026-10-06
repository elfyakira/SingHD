import HeroSection from '@/components/katsuyaku/HeroSection'
import ProblemSection from '@/components/katsuyaku/ProblemSection'
import SolutionSection from '@/components/katsuyaku/SolutionSection'
import FeaturesSection from '@/components/katsuyaku/FeaturesSection'
import StatsSection from '@/components/katsuyaku/StatsSection'
import TestimonialsSection from '@/components/katsuyaku/TestimonialsSection'
import PricingSection from '@/components/katsuyaku/PricingSection'
import FaqSection from '@/components/katsuyaku/FaqSection'
import ContactSection from '@/components/katsuyaku/ContactSection'
import StructuredData from '@/components/StructuredData'
import { faqs } from '@/data/katsuyaku-faqs'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

const schemas = [
  generateBreadcrumbSchema([
    { name: 'ホーム', url: siteConfig.siteUrl },
    { name: 'カツヤク', url: `${siteConfig.siteUrl}/katsuyaku` },
  ]),
  generateFAQSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a }))),
]

export default function KatsuyakuPage() {
  return (
    <main>
      <StructuredData data={schemas} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
