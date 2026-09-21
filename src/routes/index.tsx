import { createFileRoute } from '@tanstack/react-router'
import { NewsTicker, LogoStrip, CtaBanner } from '#/components/sections'
import { HeroSlider } from '#/features/home/hero-slider'
import { useRevealOnScroll } from '#/hooks/use-reveal'
import {
  ServicesGrid,
  AboutSection,
  WhyChooseSection,
  StatsSection,
  ForertmSection,
  RecentProjectsSection,
  RecentBlogSection,
} from '#/features/home/sections'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const revealRef = useRevealOnScroll()

  return (
    <div ref={revealRef}>
      <HeroSlider />
      <NewsTicker />
      <ServicesGrid />
      <AboutSection />
      <WhyChooseSection />
      <StatsSection />
      <ForertmSection />
      <LogoStrip />
      <RecentProjectsSection />
      <RecentBlogSection />
      <CtaBanner />
    </div>
  )
}
