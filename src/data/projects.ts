export type Project = {
  slug: string
  title: string
  excerpt: string
  image: string | null
  href: string
  /** Launch note, e.g. "Launched successfully on the Auspicious day of Good Friday, 2nd April 2021." */
  launchNote?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'forertm',
    title: 'foreRTM- Real Time Market Price and Volume forecasting',
    excerpt: '“A humble beginning.”',
    image: '/images/projects/forertm.svg',
    href: '/projects/forertm',
  },
  {
    slug: 'c2c-campus-to-corporate',
    title: 'C2C – Campus to Corporate',
    excerpt: 'A masterclass to your dream job in the Power Sector.',
    image: '/images/projects/c2c-campus-to-corporate.svg',
    href: '/projects/c2c-campus-to-corporate',
  },
  {
    slug: 'rems-renewable-energy-management-system',
    title: 'REMS – Renewable Energy Management System',
    excerpt: 'First time RE Curtailment details data is captured in a single repository.',
    image: '/images/projects/rems-renewable-energy-management-system.svg',
    href: '/projects/rems-renewable-energy-management-system',
  },
  {
    slug: 'ftc-first-time-charging-training',
    title: 'FTC – First Time Charging Training',
    excerpt:
      'Capacity Building Program on FTC were successfully conducted to various participants of POWERGRID.',
    image: '/images/projects/ftc-first-time-charging-training.svg',
    href: '/projects/ftc-first-time-charging-training',
  },
  {
    slug: 'foredam-the-game-changer',
    title: 'foreDAM, THE GAME CHANGER',
    excerpt: 'AI enabled Day Ahead Market Price and Volume forecasting for IEX.',
    launchNote:
      'foreDAM, an AI enabled Day Ahead Market Price and Volume forecasting, is Launched successfully on the Auspicious day of Good Friday, 2nd April 2021.',
    image: '/images/projects/foredam-the-game-changer.svg',
    href: '/projects/foredam-the-game-changer',
  },
  {
    slug: 'ntpc-khargone-project',
    title: 'NTPC Khargone Project',
    excerpt: 'Development and Maintenance of URS software for NTPC, Khargone as a Pilot project.',
    image: '/images/projects/ntpc-khargone-project.svg',
    href: '/projects/ntpc-khargone-project',
  },
]
