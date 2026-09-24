export type HeroSlide = {
  kicker: string
  titleLines: [string, string]
  highlight?: 'first' | 'second'
  link: { label: string; to: string; params?: Record<string, string> }
  image: string | null
  visible: boolean
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    kicker: 'Platform Practical View with',
    titleLines: ['AI-Enabled', 'Power Solutions'],
    highlight: 'first',
    link: { label: 'Learn more', to: '/service/forecasting-predictions' },
    image: '/images/hero/banner2-new.webp',
    visible:true,
  },
  {
    kicker: 'Advisory & Consultancy',
    titleLines: ['Energy Management,', 'Redefined'],
    link: { label: 'About us', to: '/about-us' },
    image: '/images/hero/pic1.webp',
    visible:true,
  },
  {
    kicker: 'foreDAM · foreRTM',
    titleLines: ['Power Market', 'Prediction'],
    link: { label: 'Explore projects', to: '/projects/$slug', params: { slug: 'forertm' } },
    image: '/images/hero/pic3-new.webp',
    visible:true,
  },
]

export const WHY_FEATURES = [
  {
    title: 'Innovation',
    body: 'Novel software products that optimize and increase energy efficiency while keeping your energy bills within limits.',
    color: '#5eb2fc',
  },
  {
    title: 'Reliability',
    body: 'We understand the challenges of AI in the energy sector and consolidate data with guaranteed security.',
    color: '#513ebd',
  },
  {
    title: 'Sustainability',
    body: 'We are committed to transforming the energy system & developing sustainability actions to protect the environment.',
    color: '#27cbff',
  },
]

export const TRADING_STATS = [
  { value: '73855.55', unit: 'MUs', caption: 'Total units of power traded since 2009' },
  { value: '11670.80', unit: 'MUs', caption: 'Total units of power traded since June 2019' },
  { value: '51.08', unit: 'MUs', caption: 'Total units of power traded since 2009' },
  { value: '70.80', unit: 'MUs', caption: 'Units traded with Open Access' },
]

/** Feature carousel uses only images that exist locally. */
export const FEATURE_SLIDES = ['/images/pic1.png', '/images/pic2.png', '/images/banner2.jpg']

export const ABOUT_SECTION = {
  eyebrow: 'Who we are',
  title: 'About Our Company',
  paragraphs: [
    'Inspirigence Works is an energy management software company offering a wide range of AI-enabled power utility solutions for clients from industries, Discoms, and SLDCs at the national and regional perspectives.',
    'At Inspirigence Works, our team continuously strives to improve and bring together the evolving energy infrastructure and ecosystem, latest AI techniques in terms of machine learning and big data, and innovative analytics software to meet your power utility goals.',
  ],
  image: '/images/pic1.png',
}

export const WHY_CHOOSE_TEXT = [
  'The energy industry is undergoing an unprecedented transformation from a conservative past to a new system where innovation is the key. The flood of data resulting from the increasing digitalization and decentralization of the power grid currently requires efficient AI-based evaluation and analysis for controlled regulation with a focus on reducing utility costs.',
  'At Inspirigence Works, we identified the true potential of machine learning, big data, advanced analytics, and other AI techniques in core functions of the energy sector, and tracked how intelligence has matured over the past few years. Understanding these transition trends, we have been dedicatedly developing innovative web-based energy scheduling software and RTM software that scale-up organizational processes, strategies, cost-efficiencies, and also help in securing continuous power supply from unconventional sources at more reasonable rates.',
]

export const QUANTUM_TEXT =
  "India's power system market is in evolving stage. Huge opportunities in products like RTM, DAM, RRAS, and SCED are available. We can support these with our smart portfolio management and the quantum of units to be traded can be optimised for a favourable turnaround."

export const FORERTM_SECTION = {
  title: 'foreRTM — Launched successfully on the auspicious day, 14th January 2022',
  image: '/images/projects/forertm.svg',
  paragraphs: [
    'M/s Inspirigence Works has launched a new AI tool, i.e. foreRTM (forecasting of Price & Volume in Real Time Market) after its successful endeavour of launching earlier tool – foreDAM (forecasting of Price & Volume in Day Ahead Market). This is our maiden effort for the Indian Power Sector.',
  ],
  quote:
    'Excellence is never an accident. It is always the result of high intentions, sincere efforts and intelligent Execution.',
}
