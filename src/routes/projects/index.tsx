import { createFileRoute } from '@tanstack/react-router'
import { PageHero, LogoStrip, CtaBanner } from '#/components/sections'
import { ProjectCard } from '#/features/blog/post-card'
import { PROJECTS } from '#/data/projects'

export const Route = createFileRoute('/projects/')({ component: ProjectsIndex })

function ProjectsIndex() {
  return (
    <>
      <PageHero
        variant="sky"
        eyebrow="PORTFOLIO"
        title="Projects"
        lead="AI-enabled products, platforms, and capacity-building programs built for the Indian power sector."
      />

      <section className="site-container py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
