const PALETTE = [
  ['#513ebd', '#6d5df1'],
  ['#2f80ed', '#5eb2fc'],
  ['#3f2fa1', '#5a48d8'],
  ['#1e3a8a', '#3b82f6'],
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

function svgPlaceholder(seed: string): string {
  const [a, b] = PALETTE[hash(seed) % PALETTE.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="480" viewBox="0 0 720 480">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
  </linearGradient></defs>
  <rect width="720" height="480" fill="url(#g)"/>
  <circle cx="600" cy="80" r="150" fill="rgba(255,255,255,0.10)"/>
  <circle cx="80" cy="430" r="120" fill="rgba(255,255,255,0.08)"/>
  <text x="360" y="236" font-family="Poppins, Arial, sans-serif" font-size="32" font-weight="700" fill="rgba(255,255,255,0.95)" text-anchor="middle">Inspirigence Works</text>
  <text x="360" y="282" font-family="Inter, Arial, sans-serif" font-size="17" fill="rgba(255,255,255,0.8)" text-anchor="middle">Image placeholder</text>
</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function MediaImage({
  src,
  alt,
  seed,
  className,
  loading = 'lazy',
}: {
  src: string | null
  alt: string
  seed?: string
  className?: string
  loading?: 'lazy' | 'eager'
}) {
  const resolved = src ?? svgPlaceholder(seed ?? alt)
  return <img src={resolved} alt={alt} className={className} loading={loading} />
}

export function initialsAvatar(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#513ebd"/><stop offset="1" stop-color="#5eb2fc"/>
  </linearGradient></defs>
  <rect width="480" height="360" fill="url(#g)"/>
  <circle cx="240" cy="150" r="62" fill="rgba(255,255,255,0.22)"/>
  <circle cx="240" cy="132" r="24" fill="rgba(255,255,255,0.85)"/>
  <path d="M192 210a48 48 0 0 1 96 0" fill="rgba(255,255,255,0.85)"/>
</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
