import { Link } from '@tanstack/react-router'
import { PARTNER_LOGOS, TICKER } from '#/data/logos'

export function NewsTicker() {
  const text = `${TICKER}\u2003•\u2003${TICKER}\u2003•\u2003${TICKER}\u2003•\u2003${TICKER}`
  return (
    <div className="border-y border-line-soft bg-brand-soft/60">
      <div className="site-container flex items-center gap-3 py-3">
        <span className="hidden shrink-0 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white sm:block">
          News
        </span>
        <div className="marquee">
          <div className="marquee-track">
            <span className="whitespace-nowrap pr-8 text-sm font-medium text-brand-strong">{text}</span>
            <span className="whitespace-nowrap pr-8 text-sm font-medium text-brand-strong">{text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LogoStrip() {
  return (
    <section className="site-container py-14">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {PARTNER_LOGOS.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto object-contain opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="site-container py-14">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#513ebd] via-[#5a48d8] to-[#2f2a86] px-8 py-16 text-center shadow-2xl shadow-brand/30 sm:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(600px 200px at 20% 0%, rgba(94,178,252,0.5), transparent 60%), radial-gradient(500px 220px at 85% 100%, rgba(39,203,255,0.35), transparent 65%)',
          }}
        />
        <h2 className="relative mx-auto max-w-3xl text-balance text-2xl font-bold text-white sm:text-4xl">
          Get to know how Inspirigence Works can impact your energy efficiency
        </h2>
        <div className="relative mt-8">
          <Link to="/contact-us" className="btn-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  lead,
  variant = 'azure',
}: {
  eyebrow: string
  title: string
  lead?: string
  /** blue-toned band palette: 'azure' | 'sky' | 'indigo' | 'cerulean' | 'steel' */
  variant?: 'azure' | 'sky' | 'indigo' | 'cerulean' | 'steel'
}) {
  return (
    <section className={`page-hero  pt-12  page-hero--${variant} relative overflow-hidden border-b border-line-soft`}>
      {/* smooth brand gradient (per variant, in CSS) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" />
      {/* soft colour glows (tinted per variant, in CSS) */}
      <div aria-hidden="true" className="page-hero__glow pointer-events-none absolute inset-0" />
      {/* faint grid pattern fading out to the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(81,62,189,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(81,62,189,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(100deg, black 0%, transparent 55%)',
          WebkitMaskImage: 'linear-gradient(100deg, black 0%, transparent 55%)',
        }}
      />
      {/* floating soft blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-soft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-brand/10 blur-3xl"
      />

      <div className="site-container relative py-20 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand/80">
            <li>
              <Link to="/" className="transition-colors hover:text-brand-strong">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand/40">/</li>
            <li className="text-ink/70">{eyebrow}</li>
          </ol>
        </nav>
        <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body-text sm:text-lg">{lead}</p>
        ) : null}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string
  title: string
  center?: boolean
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title mt-2 text-3xl sm:text-4xl">{title}</h2>
    </div>
  )
}
