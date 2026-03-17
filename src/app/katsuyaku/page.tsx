import HeroSection from '@/components/katsuyaku/HeroSection'
import ProblemSection from '@/components/katsuyaku/ProblemSection'
import SolutionSection from '@/components/katsuyaku/SolutionSection'
import FeaturesSection from '@/components/katsuyaku/FeaturesSection'
import StatsSection from '@/components/katsuyaku/StatsSection'
import TestimonialsSection from '@/components/katsuyaku/TestimonialsSection'
import PricingSection from '@/components/katsuyaku/PricingSection'
import FaqSection from '@/components/katsuyaku/FaqSection'
import ContactSection from '@/components/katsuyaku/ContactSection'

export default function KatsuyakuPage() {
  return (
    <main>
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
