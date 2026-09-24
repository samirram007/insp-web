import { createFileRoute } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { TeamGrid, VmvCards, WhyEngageSection, ServicesProvidedSection, ProjectsGrid } from '#/features/about/team-grid'
import { useRevealOnScroll } from '#/hooks/use-reveal'
import { ABOUT_INTRO } from '#/data/about'

export const Route = createFileRoute('/about-us')({ component: AboutUs })

function AboutUs() {
  const revealRef = useRevealOnScroll()

  return (
    <div ref={revealRef}>
      <section className="bg-soft pt-36 py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">{ABOUT_INTRO.eyebrow}</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{ABOUT_INTRO.title}</h1>
            <p className="mt-5 leading-relaxed text-body-text">{ABOUT_INTRO.body}</p>
          </div>
          <MediaImage
            src={null}
            alt="Inspirigence Works team"
            seed="about-hero"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <TeamGrid />
      <VmvCards />
      <WhyEngageSection />
      <ServicesProvidedSection />
      <ProjectsGrid />
      <LogoStrip />
      <CtaBanner />
    </div>
  )
}
