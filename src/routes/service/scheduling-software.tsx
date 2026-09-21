import { createFileRoute, Link } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { SERVICES } from '#/data/services'
import { SITE } from '#/data/site'

export const Route = createFileRoute('/service/scheduling-software')({ component: SchedulingSoftware })

const CAPABILITIES = [
  {
    title: 'AI-driven unit dispatch',
    body: 'Machine-learning optimisation across thermal, hydro and renewable resources to meet demand at the lowest compliant cost, block by block.',
  },
  {
    title: 'Deviation-aware planning',
    body: 'Deviation Settlement exposure is estimated before each revision window, so schedulers act on risk before it becomes a charge.',
  },
  {
    title: 'Market-integrated schedules',
    body: 'DAM, RTM and bilateral positions feed the same optimisation, keeping the portfolio coherent instead of siloed per desk.',
  },
  {
    title: 'Regulatory compliance built-in',
    body: 'CEA and state-specific scheduling rules are encoded in the engine, generating audit-ready records for every revision.',
  },
]

const OUTCOMES = [
  'Lower Deviation Settlement Mechanism charges',
  'Cheapest compliant procurement in every 15-minute block',
  'Faster, repeatable revision cycles for the scheduling desk',
  'Transparent, data-backed trail for regulators and management',
]

function SchedulingSoftware() {
  const related = SERVICES.filter((s) => s.slug !== 'scheduling-software')
  return (
    <>
      <section className="bg-soft py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">SERVICE</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Scheduling Software
            </h1>
            <h2 className="mt-4 text-lg font-semibold text-brand">
              Cost-efficient, AI algorithm-based energy scheduling driven by millions of data points.
            </h2>
            <p className="mt-5 leading-relaxed text-body-text">
              Purpose-built for SLDCs, Discoms and generating utilities, our web-based scheduling platform turns
              telemetry, weather and market data into an optimised, revision-ready schedule — every fifteen minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact-us" className="btn-brand">
                Request a demo
              </Link>
              <a href={SITE.powerMarketUrl} target="_blank" rel="noreferrer" className="btn-outline-light !text-brand !border-brand/40 hover:!bg-brand-soft">
                Power Market Prediction
              </a>
            </div>
          </div>
          <MediaImage
            src={null}
            alt="Scheduling software platform"
            seed="scheduling-software"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <section className="site-container py-20">
        <span className="section-eyebrow">CAPABILITIES</span>
        <h2 className="section-title mt-2 text-3xl sm:text-4xl">What the platform does</h2>
        <div className="reveal-stagger mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="card-lift rounded-2xl border border-line-soft bg-white p-8 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <title>Gear</title>
                  <circle cx="12" cy="12" r="3.2" />
                  <path d="M12 2.8v3M12 18.2v3M21.2 12h-3M5.8 12h-3M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1M18.5 18.5l-2.1-2.1M7.6 7.6 5.5 5.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body-text">{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl">Outcomes our clients target</h2>
            <ul className="mt-8 space-y-4">
              {OUTCOMES.map((o) => (
                <li key={o.slice(0, 24)} className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <title>Check</title>
                    <path d="M4 10.5 8 14.5 16 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="leading-relaxed text-body-text">{o}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-body-text">
              Novel software products that optimise and increase energy efficiency while keeping energy bills within
              limits.
            </p>
          </div>
          <MediaImage
            src="/images/blog/energy-scheduling.svg"
            alt="15-minute scheduling blocks"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <section className="site-container py-20">
        <h2 className="section-title text-2xl sm:text-3xl">Explore our other services</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {related.map((s) => (
            <Link key={s.slug} to={s.href} className="card-lift rounded-2xl border border-line-soft bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
