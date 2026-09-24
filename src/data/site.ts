export const SITE = {
  name: 'Inspirigence Works',
  tagline: 'Inspiring Intelligence Redefined',
  email: 'info@inspirigenceworks.com',
  phone: '+91 89105 99226',
  address: '122(465) Shaheed, Sahid Ganesh Dutta Rd, Fairtputaly, Birati, North Dumdum, West Bengal 700051',
  addressShort: 'Birati, North Dumdum, West Bengal',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Inspirigence+Works,+Sahid+Ganesh+Dutta+Road,+Birati,+North+Dumdum,+West+Bengal+700051&output=embed',
  mapLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=Inspirigence+Works+Birati+North+Dumdum',
  hours: 'Mon – Sat · 9:00 am – 6:30 pm',
  powerMarketUrl: 'https://pmp.inspirigenceworks.co.in',
}

export type NavChild = { label: string; href: string }
export type NavItem = {
  label: string
  href?: string
  children?: NavChild[]
}

export const NAV: NavItem[] = [
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Service',
    href: '/service',
    children: [
      { label: 'Consultancy Services', href: '/service/consultancy-services' },
      { label: 'Team Practical Views', href: '/service/team-practical-views' },
      { label: 'Forecasting & Predictions', href: '/service/forecasting-predictions' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  // { label: 'Blog', href: '/blog' },
  {
    label: 'Useful Links',
    children: [
      { label: 'CERC', href: 'https://cercind.gov.in/index.html' },
      { label: 'CEA', href: 'https://cea.nic.in/?lang=en' },
      { label: 'Ministry of Power', href: 'https://powermin.gov.in/' },
      { label: 'CTU', href: 'https://www.ctuil.in/' },
      { label: 'GRID India – NLDC', href: 'https://posoco.in/en/' },
      { label: 'ERLDC', href: 'https://erldc.in/' },
      { label: 'WRLDC', href: 'https://www.wrldc.in/' },
      { label: 'NRLDC', href: 'https://nrldc.in/' },
      { label: 'SRLDC', href: 'https://www.srldc.in/' },
      { label: 'NERLDC', href: 'https://www.nerldc.in/' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
]

export const TICKER =
  'Inspirigence Works goes Global again, after ENERGINX(USA) its now SOLARPACK(Spain)'

export const USEFUL_LINKS: NavChild[] = [
  { label: 'CERC', href: 'https://cercind.gov.in/index.html' },
  { label: 'CEA', href: 'https://cea.nic.in/?lang=en' },
  { label: 'Ministry of Power', href: 'https://powermin.gov.in/' },
  { label: 'CTU', href: 'https://www.ctuil.in/' },
  { label: 'GRID India – NLDC', href: 'https://posoco.in/en/' },
  { label: 'ERLDC', href: 'https://erldc.in/' },
  { label: 'WRLDC', href: 'https://www.wrldc.in/' },
  { label: 'NRLDC', href: 'https://nrldc.in/' },
  { label: 'SRLDC', href: 'https://www.srldc.in/' },
  { label: 'NERLDC', href: 'https://www.nerldc.in/' },
]
