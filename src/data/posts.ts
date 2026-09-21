export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }

export type Post = {
  slug: string
  title: string
  date: string
  author: string
  image: string
  excerpt: string
  body: PostBlock[]
  category: string
  readTime: string
}

export const POSTS: Post[] = [
  {
    slug: 'foredam-ai-day-ahead-market-forecasting',
    title: 'foreDAM: How AI Day-Ahead Market Forecasting Changes the Game for Discoms',
    date: 'Nov 11, 2020',
    author: 'inspiri_admin',
    image: '/images/blog/foredam-price-forecasting.svg',
    readTime: '6 min read',
    category: 'uncategorized',
    excerpt:
      'Day-ahead price and volume forecasting with machine learning gives buyers and sellers a genuine planning edge in the power exchange — here is how foreDAM turns 96 market blocks into a procurement strategy.',
    body: [
      {
        type: 'p',
        text: 'The Day-Ahead Market (DAM) on the power exchange clears electricity in ninety-six fifteen-minute blocks for every trading day. For a distribution company, the difference between a good month and a painful one often comes down to how well those ninety-six blocks were anticipated. Bid too conservatively and you over-procure through costly Bilateral or Deviation Settlement mechanisms; bid too aggressively and you are exposed to unfavourable clearing prices.',
      },
      {
        type: 'p',
        text: 'foreDAM is our AI-enabled price and volume forecasting engine for the Day-Ahead Market. It combines historical market clearing data with power system parameters — weather-driven demand, generation outages, renewable injection patterns and transmission constraints — to project the expected clearing price and volume for each block of the next trading day.',
      },
      { type: 'h2', text: 'What the forecast actually tells you' },
      {
        type: 'p',
        text: 'Each morning, subscribers receive a block-wise projection covering the full ninety-six block horizon. The projection is not a single number but a band with confidence intervals, so schedulers can distinguish between blocks where prices are highly predictable and blocks where volatility — typically around the evening peak or during renewable ramps — warrants a more defensive procurement posture.',
      },
      {
        type: 'list',
        items: [
          'Block-wise price bands for all 96 DAM sessions of the next trading day',
          'Expected volume traded, helping gauge liquidity before bidding',
          'Peak-window flags where deviation risk is highest',
          'Portfolio suggestions for mixing DAM, RTM and bilateral purchases',
        ],
      },
      { type: 'h2', text: 'Why machine learning, and not classical curves' },
      {
        type: 'p',
        text: 'Classical approaches — merit-order stacking on nameplate capacities, or simple seasonal averages of historical clearing prices — degrade quickly when the generation mix shifts. A cloudy week in a solar-rich state or the commissioning of a new thermal unit moves the supply curve in ways that static models cannot see. Machine learning models trained on rolling windows of exchange data, weather forecasts and outage reports absorb these shifts continuously.',
      },
      {
        type: 'quote',
        text: 'Excellence is never an accident. It is always the result of high intentions, sincere efforts and intelligent Execution.',
      },
      {
        type: 'p',
        text: 'We launched foreDAM on Good Friday, 2nd April 2021, after months of back-testing against real exchange outcomes. For Discoms and SLDCs the promise is straightforward: lower cost of power purchase through smarter bidding, better regulatory compliance, and a defensible, data-driven basis for every procurement decision.',
      },
    ],
  },
  {
    slug: 'rtm-real-time-market-48-auctions-explained',
    title: 'RTM in Plain Language: Making Sense of 48 Auctions a Day',
    date: 'Nov 11, 2020',
    author: 'inspiri_admin',
    image: '/images/blog/rtm-48-auctions.svg',
    readTime: '5 min read',
    category: 'uncategorized',
    excerpt:
      'The Real-Time Market cleared its first block in June 2020. Here is how the half-hourly auction cycle works, why it rewards fast forecasting, and what foreRTM delivers 25 minutes before each gate closure.',
    body: [
      {
        type: 'p',
        text: 'The Real-Time Market (RTM) went live on 1st June 2020 and restructured intraday power trading in India into forty-eight half-hourly auction sessions. Delivery for each session starts one hour after gate closure, which makes RTM the fastest-acting liquid market available to a scheduler.',
      },
      { type: 'h2', text: 'The auction cycle, minute by minute' },
      {
        type: 'p',
        text: 'Participants submit bids for each half-hour session ahead of gate closure. The exchange matches aggregated supply and demand, clears the market, and publishes results — all within minutes. For the scheduler at an SLDC, the practical challenge is that forty-eight independent opportunities also mean forty-eight chances to misjudge the market if you are working from stale information.',
      },
      {
        type: 'list',
        items: [
          '48 auction sessions daily, one for every half-hour of delivery',
          'Delivery begins one hour after the bid session closes',
          'Prices can swing sharply between consecutive sessions',
          'High-solar daytime hours regularly produce the day’s lowest clearing prices',
        ],
      },
      { type: 'h2', text: 'Where foreRTM fits in' },
      {
        type: 'p',
        text: 'Twenty-five minutes before every auction, our forecasting engine publishes predicted price and volume for the upcoming session directly to subscribers’ inboxes. The lead time is deliberate: long enough to review the projection against your current schedule and adjust the bid, short enough that the forecast still reflects near-real-time system conditions.',
      },
      {
        type: 'p',
        text: 'A humble beginning, as we called it when foreRTM launched on 14th January 2022 — but for market participants, a practical one. Used consistently, the projections support a simple discipline: treat every session as a fresh optimisation problem rather than a rolling average of yesterday.',
      },
    ],
  },
  {
    slug: 'smart-energy-scheduling-15-minute-blocks',
    title: 'Inside Smart Scheduling: Why the 15-Minute Block Matters',
    date: 'Nov 11, 2020',
    author: 'inspiri_admin',
    image: '/images/blog/energy-scheduling.svg',
    readTime: '5 min read',
    category: 'uncategorized',
    excerpt:
      'Revision windows, deviation settlements and renewable ramps all live at the fifteen-minute granularity. A look at how AI-driven scheduling turns millions of data points into cost-efficient unit dispatch.',
    body: [
      {
        type: 'p',
        text: 'Energy scheduling at a load dispatch centre is fundamentally a problem of granularity. Demand does not move in tidy hourly steps, renewables do not respect the clock, and deviation settlement charges are computed on fifteen-minute blocks. A schedule that is right on average can still be wrong in every block that matters.',
      },
      { type: 'h2', text: 'The data behind the schedule' },
      {
        type: 'p',
        text: 'Our scheduling approach consumes telemetry from SCADA systems, weather feeds, historical load curves, unit outage calendars and market prices — millions of data points consolidated into a single optimisation. The AI layer then produces a dispatch trajectory that respects technical constraints while minimising the expected cost of power purchase and deviations.',
      },
      {
        type: 'list',
        items: [
          'Block-level (15-minute) revision of generation and drawal schedules',
          'Deviation exposure estimated before it is incurred, not after',
          'Automatic prioritisation of cheaper available resources',
          'Scenario planning for renewable ramps and forced outages',
        ],
      },
      { type: 'h2', text: 'Cost efficiency as an outcome, not a slogan' },
      {
        type: 'p',
        text: 'The measurable outcomes our clients target are specific: reduce Deviation Settlement Mechanism charges, shift procurement towards the cheapest compliant sources in every block, and give regulators a transparent, data-backed trail for every scheduling decision. Smart scheduling is where those three goals meet.',
      },
      {
        type: 'quote',
        text: 'The energy industry is undergoing an unprecedented transformation — from a conservative past to a new system where innovation is the key.',
      },
    ],
  },
  {
    slug: 'renewable-integration-grid-challenges',
    title: 'Integrating Renewables: Curtailment, Forecasting and the 175 GW Target',
    date: 'Nov 11, 2020',
    author: 'inspiri_admin',
    image: '/images/blog/renewable-integration.svg',
    readTime: '6 min read',
    category: 'uncategorized',
    excerpt:
      'India’s renewable capacity ambition collides with a hard operational reality: variability. Why better forecasting, storage and market design — not more capacity alone — determine how much clean energy the grid actually delivers.',
    body: [
      {
        type: 'p',
        text: 'Every megawatt of renewable capacity only counts if the grid can absorb its output. As solar and wind shares grow, operators face the same equation from opposite ends: too much injection at midday, too little at the evening peak. Curtailment — renewable energy that could have been generated but the grid could not take — is the visible symptom of that gap.',
      },
      { type: 'h2', text: 'Curtailment is a forecasting problem' },
      {
        type: 'p',
        text: 'A significant share of curtailment traces back to forecast error. When the day-ahead renewable forecast overshoots actual generation, conventional units were already backed down and the surplus has nowhere to go. When it undershoots, expensive fast-response reserves fill the gap. Shrinking the forecast error band directly reduces both.',
      },
      {
        type: 'list',
        items: [
          'Plant-level and portfolio-level generation forecasting',
          'Ramp alerts ahead of cloud-cover or wind-lull events',
          'Curtailment analytics to identify systemic, not random, losses',
          'Hybrid project planning informed by observed curtailment patterns',
        ],
      },
      { type: 'h2', text: 'Markets as the balancing instrument' },
      {
        type: 'p',
        text: 'The RTM has quietly become the grid’s shock absorber for renewable variability: sellers with surplus green power can find buyers in half-hourly sessions instead of spilling energy. Our work with renewable utilities focuses on making those market decisions data-driven — when to sell, when to hold, and how to position a hybrid portfolio across DAM and RTM.',
      },
      {
        type: 'quote',
        text: 'We are committed to transforming the energy system and developing sustainability actions to protect the environment.',
      },
    ],
  },
  {
    slug: 'digital-transformation-of-the-indian-grid',
    title: 'The Digital Grid: What AI Adoption Really Looks Like for Utilities',
    date: 'Nov 11, 2020',
    author: 'inspiri_admin',
    image: '/images/blog/grid-digitalization.svg',
    readTime: '5 min read',
    category: 'uncategorized',
    excerpt:
      'Digitalization of the power grid produces a flood of data — and most of it is still underused. A practical map of where AI creates value first: scheduling, forecasting, compliance and asset decisions.',
    body: [
      {
        type: 'p',
        text: 'The Indian power grid is digitalizing faster than its decision processes are. Smart meters, SCADA expansions and market telemetry generate streams of data that would have been unimaginable a decade ago. Yet in many control rooms, critical decisions still rest on spreadsheets refreshed a few times a day.',
      },
      { type: 'h2', text: 'Start where the money flows' },
      {
        type: 'p',
        text: 'The fastest returns from AI in a utility do not come from exotic applications; they come from the four or five decisions that carry the largest financial weight — procurement mix, deviation management, unit commitment and market bidding. Automating the analytics behind those decisions compounds savings every single day.',
      },
      {
        type: 'list',
        items: [
          'Power purchase optimisation before capital expenditure on new systems',
          'Forecasting pipelines that feed schedulers, not just dashboards',
          'Compliance reporting generated from the same source data',
          'Institutional memory: models that retain what experienced operators know',
        ],
      },
      { type: 'h2', text: 'People first, then models' },
      {
        type: 'p',
        text: 'Our team pairs veterans with over a hundred years of combined grid experience with data scientists who build the models. The pairing is deliberate: operators know which levers matter and which constraints are hard; the models make that judgement repeatable at machine speed. AI adoption that skips this pairing produces impressive demos and unused systems.',
      },
      {
        type: 'p',
        text: 'The utilities that will lead the next decade are not those with the most data, but those that close the loop between data, decision and action — every fifteen minutes, every day.',
      },
    ],
  },
]

export const BLOG_CATEGORIES = [{ slug: 'uncategorized', label: 'Uncategorized' }]
