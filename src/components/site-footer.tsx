import { Link } from '@tanstack/react-router'
import { SITE, USEFUL_LINKS } from '#/data/site'

const footerNav = [
  { label: 'Service', href: '/service' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Video', href: '/video' },
  { label: 'Contact Us', href: '/contact-us' },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-footer-bg text-white/80">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="Inspirigence Works home">
            <img src="/images/footer_logo.png" alt="Inspirigence Works" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{SITE.tagline}</p>
          <p className="mt-2 text-sm text-white/60">
            <a href={`mailto:${SITE.email}`} className="hover:text-cyan-300">
              {SITE.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-white/60">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-cyan-300">
              {SITE.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-white/60">{SITE.addressShort}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Useful links">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Useful Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {USEFUL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-3 py-5 text-sm sm:flex-row">
          <p>
            ©{new Date().getFullYear()} <span className="font-semibold text-white">Inspirigence Works</span>, All
            Rights Reserved
          </p>
          <p className="text-white/50">Designed with ⚡ for the power sector</p>
        </div>
      </div>
    </footer>
  )
}
