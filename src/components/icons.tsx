type IconProps = { className?: string }

const base = 'h-6 w-6'

export function IconArrowRight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Arrow</title>
      <path d="M4 10h12m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Check</title>
      <path d="M4 10.5 8 14.5 16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconStar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <title>Star</title>
      <path d="M12 3l1.9 5.6L20 10l-4 3.9L17 20l-5-2.9L7 20l1-6.1L4 10l6.1-1.4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconBuilding({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <title>Building</title>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTrend({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <title>Trend</title>
      <path d="M3 17l5-6 4 3 6-8 3 4M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTeam({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <title>Team</title>
      <path
        d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 10a3 3 0 1 0 0-6 3 3 0 0 1 0 6zm7 10v-2a4 4 0 0 0-3-3.87M15 4.13A3 3 0 0 1 15 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconUser({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Author</title>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" strokeLinecap="round" />
    </svg>
  )
}

export function IconCalendar({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Date</title>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" strokeLinecap="round" />
    </svg>
  )
}

export function IconComment({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Comments</title>
      <path d="M21 12a8 8 0 1 1-3.6-6.7L21 4l-1 3.4A8 8 0 0 1 21 12z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconQuote({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <title>Quote</title>
      <path d="M10 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V10a2 2 0 0 0-2-2zm9 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V10a2 2 0 0 0-2-2z" />
    </svg>
  )
}
