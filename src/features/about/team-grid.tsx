import { Link } from '@tanstack/react-router'
import { SectionHeading } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { IconCheck, IconQuote } from '#/components/icons'
import {
  TEAM,
  VMV,
  WHY_ENGAGE,
  SERVICES_PROVIDED_LIST,
  TRANSFORMATION_PARAGRAPHS,
  SERVICES_PROVIDED_INTRO,
} from '#/data/about'
import { PROJECTS } from '#/data/projects'

export function TeamGrid() {
  return (
    <section className="site-container py-20">
      <span className="section-eyebrow">TEAM PRACTICAL VIEWS</span>
      <h2 className="section-title mt-2 text-3xl sm:text-4xl">100+ years of practical experience in a capsule</h2>
      <div className="reveal-stagger mt-12 grid gap-6   sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {TEAM.map((member) => (
          <div key={member.name} className="card-lift overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-soft">
              <MediaImage
                src={member.photo}
                alt={member.name}
                seed={member.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-ink">{member.name}</h3>
              <p className="mt-0.5 text-sm font-semibold text-brand">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function VmvCards() {
  return (
    <section className="bg-soft py-20">
      <div className="reveal-stagger site-container grid gap-6 sm:gap-8 md:grid-cols-3">
        {VMV.map((item) => (
          <div key={item.title} className="card-lift overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm">
            <MediaImage
              src={item.image}
              alt={item.title}
              seed={item.title}
              className="h-44 w-full object-cover"
            />
            <div className="p-7">
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WhyEngageSection() {
  return (
    <section className="site-container py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-br from-[#513ebd] to-[#2f2a86] p-10 text-white">
          <h2 className="text-3xl font-bold">Why Engage Us</h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Coupling the rich experience of the trio of “Team Practical Views” with the zeal of enthusiasm and
            ambition of talented, fearless youth to create breakthrough techniques, Inspirigence Works is confident
            to redefine the difference between success and failure. Our innovative and tested solutions can help:
          </p>
          <ol className="mt-8 space-y-5">
            {WHY_ENGAGE.map((item, i) => (
              <li key={item.slice(0, 24)} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-cyan-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-white/85">{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="section-title text-3xl sm:text-4xl">
            The Power Sector is undergoing an Unprecedented Transformation
          </h2>
          {TRANSFORMATION_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-body-text">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesProvidedSection() {
  return (
    <section className="bg-soft py-20">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="section-title text-3xl sm:text-4xl">Services We Provide</h2>
          <p className="mt-5 leading-relaxed text-body-text">{SERVICES_PROVIDED_INTRO}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SERVICES_PROVIDED_LIST.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl border border-line-soft bg-white px-4 py-3 font-semibold text-ink">
                <IconCheck className="h-5 w-5 text-brand" />
                {s}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/service" className="btn-brand">
              Explore Services
            </Link>
          </div>
        </div>
        <MediaImage
          src={null}
          alt="Inspirigence Works solutions"
          seed="redcap"
          className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
        />
      </div>
    </section>
  )
}

export function ProjectsGrid() {
  return (
    <section className="site-container py-20">
      <SectionHeading eyebrow="Portfolio" title="Our Recent Projects" />
      <div className="reveal mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
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
    </section>
  )
}

function QuoteBlock() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <IconQuote className="mx-auto h-8 w-8 text-brand/30" />
      <p className="mt-4 text-xl font-semibold italic text-brand-strong">
        Excellence is never an accident. It is always the result of high intentions, sincere efforts and intelligent
        Execution.
      </p>
    </div>
  )
}

export { QuoteBlock }
