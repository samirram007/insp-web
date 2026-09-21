import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { HERO_SLIDES } from '#/data/home'
import { MediaImage } from '#/components/media'

const AUTOPLAY_MS = 6000

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const count = HERO_SLIDES.length

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, count])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <section
      className="relative overflow-hidden bg-[#0e1030]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 48) {
          if (dx < 0) next()
          else prev()
        }
        touchStartX.current = null
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Inspirigence Works highlights"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.kicker}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <MediaImage
            src={slide.image}
            alt=""
            seed={`hero-${i}`}
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
              i === index ? 'scale-105' : 'scale-100'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1030]/95 via-[#0e1030]/75 to-[#0e1030]/30" />
        </div>
      ))}

      <div className="site-container relative flex min-h-[480px] flex-col justify-center py-20 md:min-h-[560px]">
        {HERO_SLIDES.map(
          (slide, i) =>
            i === index && (
              <div key={slide.kicker} className="rise-in max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{slide.kicker}</p>
                <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  <span className={slide.highlight === 'first' ? 'text-cyan-300' : undefined}>
                    {slide.titleLines[0]}
                  </span>
                  <br />
                  {slide.titleLines[1]}
                </h1>
                <div className="mt-8">
                  <Link to={slide.link.to} params={slide.link.params as never} className="btn-brand touch-manipulation">
                    {slide.link.label}
                    <HeroArrow />
                  </Link>
                </div>
              </div>
            ),
        )}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-all hover:scale-110 hover:bg-white/25 active:scale-95 sm:left-4"
        >
          <HeroChevron direction="left" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-all hover:scale-110 hover:bg-white/25 active:scale-95 sm:right-4"
        >
          <HeroChevron direction="right" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="site-container flex gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.kicker}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-cyan-300' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroArrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <title>Arrow</title>
      <path d="M4 10h12m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeroChevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <title>{direction === 'left' ? 'Previous' : 'Next'}</title>
      <path
        d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
