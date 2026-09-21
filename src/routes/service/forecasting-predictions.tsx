import { createFileRoute, Link } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { SERVICES } from '#/data/services'
import { SITE } from '#/data/site'

export const Route = createFileRoute('/service/forecasting-predictions')({ component: ForecastingPredictions })

const BODY_PARAGRAPHS = [
  'Portfolio management by drawee entities as well as seller has become very challenging and also lucrative as the market products are expanding. Day ahead market has already matured but with the introduction of real time power market (RTM) from 1st June 2020 onwards has changed the way both buyer and seller can better manage their respective portfolio. It is still a guess work for bidding to sell and buy on DAM and RTM. For the first time a scientific algorithm is being utilized coupled with likely Power system parameters to forecast the estimated price and volume for each 96 block for DAM which will also give fair idea of RTM on day ahead basis. This would benefit all users to optimize their portfolio and cost with advance knowledge of DAM/RTM both in price and volume. The real advantage is with high solar penetration and summer approaching making high availability during day time, it would be a game changer for DAM/RTM product utilization to optimize cost.',
  'With advance computing and machine learning (AI applications), we are confident to forecast very close, within 10% of DAM/RTM price/volume. Such an advance information would enable both seller and buyer to optimize their energy portfolio and also cost saving substantially on daily basis. The regulatory compliance of zero crossing and allowable DSM could also be optimized. An advance forecast gives ample opportunity for the DISCOMs/SLDC to plan their intra Generation schedules, strategize among all sources of Scheduling, Fuel planning and cut down the cost of purchase of Power for their state. For other Market players like Industries etc. they can optimize among various options available to them.',
]

function ForecastingPredictions() {
  const related = SERVICES.filter((s) => s.slug !== 'forecasting-predictions')
  return (
    <>
      <section className="bg-soft py-16">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">SERVICE</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Forecasting &amp; Predictions</h1>
            <h2 className="mt-4 text-lg font-semibold text-brand">
              FOREDAM is the Hope for the financial turnaround in the power market of INDIA.
            </h2>
          </div>
          <MediaImage
            src={null}
            alt="Forecasting & Predictions"
            seed="forecasting-banner"
            className="w-full rounded-2xl border border-line-soft object-cover shadow-lg shadow-black/5"
          />
        </div>
      </section>

      <section className="site-container py-20">
        <div className="prose max-w-none text-body-text">
          {BODY_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            Our latest product in this scenario is{' '}
            <strong>
              foreDAM, an AI enabled Day Ahead Market Price and Volume forecasting is Launched successfully on the
              Auspicious day of Good Friday, 2nd April 2021.
            </strong>
          </p>
          <h2 className="text-center">
            <a href={SITE.powerMarketUrl} target="_blank" rel="noreferrer">
              Power Market Prediction
            </a>
          </h2>
        </div>
        <div className="mt-10">
          <Link to="/projects/$slug" params={{ slug: 'foredam-the-game-changer' }} className="btn-brand">
            Learn More
          </Link>
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
