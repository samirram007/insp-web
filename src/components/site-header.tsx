import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useRouterState } from '@tanstack/react-router'
import { NAV } from '#/data/site'

function ChevronDown() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <title>Expand</title>
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function isExternal(href: string): boolean {
  return href.startsWith('http') || href.startsWith('//')
}

function DesktopDropdown({ children }: { children: { label: string; href: string }[] }) {
  return (
    <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-2 rounded-xl border border-line-soft bg-white pt-2 opacity-0 shadow-xl shadow-black/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <ul className="py-2">
        {children.map((child) => (
          <li key={child.label}>
            {isExternal(child.href) ? (
              <a href={child.href} target="_blank" rel="noreferrer" className="dropdown-item">
                {child.label}
              </a>
            ) : (
              <Link to={child.href} className="dropdown-item">
                {child.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <nav className="mobile-drawer absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white p-6 shadow-2xl" aria-label="Mobile">
        <div className="mb-6 flex items-center justify-between">
          <img src="/images/logo.png" alt="Inspirigence Works" className="h-9 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-ink hover:bg-soft"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <title>Close</title>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="space-y-1">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.href && !isExternal(item.href) ? (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2.5 font-semibold text-ink hover:bg-soft hover:text-brand"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="block rounded-lg px-3 py-2.5 font-semibold text-ink">{item.label}</span>
              )}
              {item.children ? (
                <ul className="ml-3 border-l border-line-soft pl-3">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      {isExternal(child.href) ? (
                        <a
                          href={child.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 text-sm text-body-text hover:text-brand"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          to={child.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 text-sm text-body-text hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>,
    document.body,
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useRouterState({ select: (s) => s.location })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.href])

  const isActive = (href?: string) => {
    if (!href || href === '#') return false
    if (href === '/') return location.pathname === '/'
    return location.pathname === href || location.pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`fixed top-0 z-40 h-28 w-full flex justify-center border-b bg-white/0  ease-out transition-shadow ${
        scrolled ? 'h-24!  bg-white/90 border-line-soft shadow-sm shadow-black/5' : 'border-transparent'
      }`}
    >
      <div className="site-header-container flex  items-center justify-between gap-4">
        <Link to="/" className="flex shrink-2 items-center" aria-label="Inspirigence Works home">
          <img src="/images/logo.png" alt="Inspirigence Works" className="w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              {item.href && !isExternal(item.href) ? (
                <Link to={item.href} className={`nav-link ${isActive(item.href) ? 'is-active' : ''}`}>
                  {item.label}
                  {item.children ? <ChevronDown /> : null}
                </Link>
              ) : (
                <button type="button" className="nav-link">
                  {item.label}
                  {item.children ? <ChevronDown /> : null}
                </button>
              )}
              {item.children ? <DesktopDropdown children={item.children} /> : null}
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-2 text-ink hover:bg-soft lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <title>Menu</title>
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
