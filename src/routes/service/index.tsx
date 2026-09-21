import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHero, LogoStrip, CtaBanner } from '#/components/sections'
import { IconArrowRight } from '#/components/icons'
import { SERVICES } from '#/data/services'

export const Route = createFileRoute('/service/')({ component: ServiceIndex })

function ServiceIndex() {
  return (
    <>
      <PageHero
        variant="azure"
        eyebrow="WHAT WE DO"
        title="Services We Provide"
        lead="With “Team Practical Views”, the company is committed to providing tailored long-term strategic planning, practical advice, and AI-powered solutions to ensure outsized benefits and cost efficiencies for State governments, Discoms, holding companies of Discoms, SLDCs, and private distribution companies."
      />

      <section className="site-container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              to={service.href}
              className="card-lift group rounded-2xl border border-line-soft bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold text-brand">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-3 text-lg font-bold text-ink group-hover:text-brand">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{service.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more
                <IconArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
