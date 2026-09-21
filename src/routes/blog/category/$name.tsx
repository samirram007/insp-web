import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { PageHero, LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { POSTS } from '#/data/posts'

export const Route = createFileRoute('/blog/category/$name')({
  component: CategoryArchive,
  loader: ({ params }) => {
    const posts = POSTS.filter((p) => p.category === params.name)
    if (posts.length === 0) throw notFound()
    return { posts, category: params.name }
  },
})

function CategoryArchive() {
  const { posts, category } = Route.useLoaderData()
  const label = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <>
      <PageHero eyebrow="CATEGORY" title={label} />

      <section className="site-container py-20">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-lift grid gap-6 rounded-2xl border border-line-soft bg-white p-6 shadow-sm sm:grid-cols-[260px_1fr]"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="block aspect-[4/3] overflow-hidden rounded-xl bg-soft"
              >
                <MediaImage
                  src={post.image}
                  alt={post.title}
                  seed={post.slug}
                  className="h-full w-full object-cover"
                />
              </Link>
              <div>
                <h2 className="text-lg font-bold text-ink">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-body-text">{post.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
