import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { PROJECTS } from '#/data/projects'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return { project }
  },
})

function ProjectDetail() {
  const { project } = Route.useLoaderData()
  const index = PROJECTS.findIndex((p) => p.slug === project.slug)
  const prev = index > 0 ? PROJECTS[index - 1] : null
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null

  return (
    <>
      <section className="bg-soft py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">PROJECTS</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-lg font-semibold text-brand">{project.excerpt}</p>
            {project.launchNote ? (
              <p className="mt-4 rounded-xl border border-brand/20 bg-brand-soft/40 px-5 py-4 text-sm leading-relaxed text-ink">
                {project.launchNote}
              </p>
            ) : null}
            <div className="mt-8">
              <Link to="/contact-us" className="btn-brand">
                Contact Us
              </Link>
            </div>
          </div>
          <MediaImage
            src={project.image}
            alt={project.title}
            seed={project.slug}
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <section className="site-container py-16">
        <div className="flex items-center justify-between gap-6 border-t border-line-soft pt-8">
          {prev ? (
            <Link to={prev.href} className="group max-w-[45%]">
              <span className="text-xs font-semibold uppercase tracking-wider text-body-text">Previous</span>
              <p className="mt-1 font-bold text-ink group-hover:text-brand">← {prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={next.href} className="group max-w-[45%] text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-body-text">Next</span>
              <p className="mt-1 font-bold text-ink group-hover:text-brand">{next.title} →</p>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
