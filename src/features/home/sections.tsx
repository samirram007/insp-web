import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { SectionHeading } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { IconArrowRight, IconStar, IconTrend, IconTeam, IconBuilding } from '#/components/icons'
import { SERVICES } from '#/data/services'
import { PROJECTS } from '#/data/projects'
import { POSTS } from '#/data/posts'
import {
  ABOUT_SECTION,
  FEATURE_SLIDES,
  FORERTM_SECTION,
  QUANTUM_TEXT,
  TRADING_STATS,
  WHY_CHOOSE_TEXT,
  WHY_FEATURES,
} from '#/data/home'
import { SITE } from '#/data/site'

function serviceIcon(slug: string) {
  if (slug === 'consultancy-services') return <IconBuilding />
  if (slug === 'forecasting-predictions') return <IconTrend />
  return <IconTeam />
}

export function ServicesGrid() {
  return (
    <section className="site-container py-20">
      <SectionHeading eyebrow="What we do" title="Services We Provide" center />
      <div className="reveal-stagger mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            to={service.href}
            className="card-lift group rounded-2xl border border-line-soft bg-white p-8 text-center shadow-sm"
          >
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              {serviceIcon(service.slug)}
            </span>
            <h3 className="text-lg font-bold text-ink">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body-text">{service.short}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Learn more
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/service" className="btn-brand">
          See All Services
        </Link>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="bg-soft py-20">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <MediaImage
          src={ABOUT_SECTION.image}
          alt="Inspirigence Works platform practical view"
          seed="about-home"
          className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
        />
        <div>
          <span className="section-eyebrow">{ABOUT_SECTION.eyebrow}</span>
          <h2 className="section-title mt-2 text-3xl sm:text-4xl">{ABOUT_SECTION.title}</h2>
          {ABOUT_SECTION.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-body-text">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <Link to="/about-us" className="btn-brand">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyChooseSection() {
  return (
    <section className="site-container py-20">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Our strengths" title="Why Choose Us" />
          {WHY_CHOOSE_TEXT.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-body-text">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <Link to="/service/team-practical-views" className="btn-brand">
              Learn More
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          {WHY_FEATURES.map((f) => (
            <div key={f.title} className="card-lift flex gap-5 rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${f.color}1a`, color: f.color }}
              >
                <IconStar />
              </span>
              <div>
                <h3 className="font-bold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body-text">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % FEATURE_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line-soft shadow-lg shadow-black/5">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {FEATURE_SLIDES.map((src, i) => (
          <MediaImage key={src} src={src} alt={`Feature slide ${i + 1}`} className="w-full shrink-0 object-cover" />
        ))}
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {FEATURE_SLIDES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to feature slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-brand' : 'w-1.5 bg-brand/30 hover:bg-brand/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-soft py-20">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <FeatureCarousel />
        <div>
          <SectionHeading eyebrow="Our features" title="Quantum of Units Traded" />
          <p className="mt-6 leading-relaxed text-body-text">{QUANTUM_TEXT}</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {TRADING_STATS.slice(0, 2).map((stat) => (
              <div key={stat.caption}>
                <p className="text-3xl font-extrabold text-brand">
                  {stat.value} <span className="text-lg text-body-text">{stat.unit}</span>
                </p>
                <p className="mt-1 text-sm text-body-text">{stat.caption}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/service/forecasting-predictions" className="btn-brand">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ForertmSection() {
  return (
    <section className="site-container py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Latest launch" title={FORERTM_SECTION.title} />
          {FORERTM_SECTION.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 leading-relaxed text-body-text">
              <strong>M/s Inspirigence Works</strong> has launched a new AI tool, i.e. <strong>foreRTM</strong>{' '}
              (forecasting of Price &amp; Volume in Real Time Market) after its successful endeavour of launching
              earlier tool – <strong>foreDAM</strong> (forecasting of Price &amp; Volume in Day Ahead Market). This is
              our maiden effort for the Indian Power Sector.
            </p>
          ))}
          <h3 className="mt-6 text-center text-xl font-bold text-brand">
            <a href={SITE.powerMarketUrl} target="_blank" rel="noreferrer">
              Power Market Prediction
            </a>
          </h3>
          <p className="mt-4 text-center font-semibold italic text-brand-strong">“{FORERTM_SECTION.quote}”</p>
          <div className="mt-8">
            <Link to="/projects/$slug" params={{ slug: 'forertm' }} className="btn-brand">
              Learn More
            </Link>
          </div>
        </div>
        <MediaImage
          src={FORERTM_SECTION.image}
          alt="foreRTM – Real Time Market Price and Volume forecasting"
          seed="forertm-home"
          className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
        />
      </div>
    </section>
  )
}

export function RecentProjectsSection() {
  return (
    <section className="site-container py-20">
      <SectionHeading eyebrow="Portfolio" title="Our Recent Projects" center />
      <div className="reveal mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project) => (
          <Link
            key={project.slug}
            to={project.href}
            className="card-lift group overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden bg-soft">
              <MediaImage
                src={project.image}
                alt={project.title}
                seed={project.slug}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold leading-snug text-ink group-hover:text-brand">{project.title}</h3>
              <p className="mt-2 text-sm text-body-text">{project.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/projects" className="btn-brand">
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export function RecentBlogSection() {
  return (
    <section className="bg-soft py-20">
      <div className="site-container">
        <SectionHeading eyebrow="From the blog" title="Recent Blog" center />
        <div className="reveal-stagger mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          {POSTS.slice(1, 4).map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="card-lift group overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-soft">
                <MediaImage
                  src={post.image}
                  alt={post.title}
                  seed={post.slug}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold leading-snug text-ink group-hover:text-brand">{post.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-body-text">{post.date}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body-text">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/blog" className="btn-brand">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
