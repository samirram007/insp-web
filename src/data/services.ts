export type Service = {
  slug: string
  title: string
  short: string
  href: string
  image: string | null
}

export const SERVICE_SLUGS = [
  'consultancy-services',
  'team-practical-views',
  'forecasting-predictions',
  'scheduling-software',
] as const

export const SERVICES: Service[] = [
  {
    slug: 'consultancy-services',
    title: 'Consultancy Services',
    short:
      'We have provided Consultancy to the following organisations. Techno India, Aparaava through WindPlus, BALCO through SSP3L, Energizx',
    href: '/service/consultancy-services',
    image: null,
  },
  {
    slug: 'forecasting-predictions',
    title: 'Forecasting & Predictions',
    short:
      'ForeDaM is the hope for the financial turnaround in the power Market. ForeDaM is AI enabled Day Ahead Market Price and Volume Forecasting.',
    href: '/service/forecasting-predictions',
    image: null,
  },
  {
    slug: 'team-practical-views',
    title: 'Team Practical Views',
    short: 'Experienced professionals to prescribe accurate actions',
    href: '/service/team-practical-views',
    image: null,
  },
  {
    slug: 'scheduling-software',
    title: 'Scheduling Software',
    short:
      'Cost-efficient AI algorithm-based energy scheduling driven by millions of data points.',
    href: '/service/scheduling-software',
    image: null,
  },
]
