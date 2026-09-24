import { createFileRoute, Link } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { IconBuilding } from '#/components/icons'
import { CONSULTANCY_CLIENTS } from '#/data/media'
import { SERVICES } from '#/data/services'

export const Route = createFileRoute('/service/consultancy-services')({ component: ConsultancyServices })

function ConsultancyServices() {
  const related = SERVICES.filter((s) => s.slug !== 'consultancy-services')
  return (
    <>
      <section className="bg-soft pt-36 py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">SERVICE</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Consultancy Services</h1>
            <p className="mt-5 leading-relaxed text-body-text">
              Experienced professionals to prescribe accurate actions &amp; assist on intelligent energy management.
              Our verified consultants work hands-on with utilities to translate data into operational decisions.
            </p>
            <div className="mt-8">
              <Link to="/contact-us" className="btn-brand">
                Talk to our experts
              </Link>
            </div>
          </div>
          <MediaImage
            src={null}
            alt="Consultancy services"
            seed="consultancy"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <section className="site-container py-20">
        <span className="section-eyebrow">TRACK RECORD</span>
        <h2 className="section-title mt-2 text-3xl sm:text-4xl">Organisations we have provided consultancy to</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONSULTANCY_CLIENTS.map((client) => (
            <div key={client} className="card-lift rounded-2xl border border-line-soft bg-white p-6 text-center shadow-sm">
              <IconBuilding className="mx-auto h-8 w-8 text-brand" />
              <p className="mt-4 font-bold text-ink">{client}</p>
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
