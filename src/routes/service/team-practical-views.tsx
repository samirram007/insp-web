import { createFileRoute, Link } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { IconStar } from '#/components/icons'
import { TEAM_PRACTICAL_HIGHLIGHTS } from '#/data/media'
import { SERVICES } from '#/data/services'

export const Route = createFileRoute('/service/team-practical-views')({ component: TeamPracticalViews })

function TeamPracticalViews() {
  const related = SERVICES.filter((s) => s.slug !== 'team-practical-views')
  return (
    <>
      <section className="bg-soft pt-36 py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">SERVICE</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Team Practical Views</h1>
            <p className="mt-5 leading-relaxed text-body-text">
              “Team Practical Views” with more than 100 years of combined practical experiences in the power sector
              has teamed up with young professional experts in statistical science and software development —
              experienced professionals to prescribe accurate actions.
            </p>
            
          </div>
          <MediaImage
            src={null}
            alt="Team Practical Views"
            seed="team-practical-views"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
        <div className="mt-8 flex justify-center">
              <Link to="/about-us" className="btn-brand">
                Meet the team
              </Link>
            </div>
      </section>

      <section className="site-container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {TEAM_PRACTICAL_HIGHLIGHTS.map((h) => (
            <div key={h} className="card-lift rounded-2xl border border-line-soft bg-white p-8 shadow-sm">
              <IconStar className="h-8 w-8 text-brand" />
              <p className="mt-4 font-semibold leading-relaxed text-ink">{h}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="site-container">
          <h2 className="section-title text-2xl sm:text-3xl">Explore our other services</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {related.map((s) => (
              <Link key={s.slug} to={s.href} className="card-lift rounded-2xl border border-line-soft bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
