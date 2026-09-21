import { createFileRoute } from '@tanstack/react-router'
import { PageHero, CtaBanner } from '#/components/sections'
import { VIDEOS } from '#/data/media'

export const Route = createFileRoute('/video')({ component: VideoGallery })

function VideoGallery() {
  return (
    <>
      <PageHero variant="steel" eyebrow="MEDIA" title="Video Gallery" />

      <section className="site-container py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <div key={video.title} className="overflow-hidden rounded-2xl border border-line-soft shadow-sm">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="bg-white px-5 py-3 text-sm font-semibold text-ink">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
