import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { LogoStrip, CtaBanner } from '#/components/sections'
import { MediaImage } from '#/components/media'
import { PostMeta } from '#/features/blog/post-card'
import { POSTS } from '#/data/posts'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return { post }
  },
})

function BlogPost() {
  const { post } = Route.useLoaderData()
  const index = POSTS.findIndex((p) => p.slug === post.slug)
  const prev = index > 0 ? POSTS[index - 1] : null
  const next = index < POSTS.length - 1 ? POSTS[index + 1] : null
  const recent = POSTS.filter((p) => p.slug !== post.slug).slice(0, 5)

  return (
    <>
      <section className="bg-soft py-16">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <div className="overflow-hidden rounded-2xl border border-line-soft shadow-sm">
              <MediaImage
                src={post.image}
                alt={post.title}
                seed={post.slug}
                className="aspect-[16/9] w-full object-cover"
                loading="eager"
              />
            </div>
            <h1 className="mt-8 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{post.title}</h1>
            <PostMeta post={post} />

            <p className="mt-6 rounded-xl bg-brand-soft/60 px-5 py-4 leading-relaxed text-brand-strong">{post.excerpt}</p>

            <div className="mt-8">
              {post.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={`${post.slug}-h-${i}`} className="mt-10 text-2xl font-bold text-ink">
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={`${post.slug}-q-${i}`}
                      className="my-8 rounded-2xl border-l-4 border-brand bg-brand-soft/50 px-6 py-5 text-lg font-semibold italic text-brand-strong"
                    >
                      “{block.text}”
                    </blockquote>
                  )
                }
                if (block.type === 'list') {
                  return (
                    <ul key={`${post.slug}-l-${i}`} className="my-6 space-y-3">
                      {block.items.map((item) => (
                        <li key={item.slice(0, 24)} className="flex items-start gap-3 text-body-text">
                          <svg
                            viewBox="0 0 20 20"
                            className="mt-1 h-4 w-4 shrink-0 text-brand"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <title>Check</title>
                            <path d="M4 10.5 8 14.5 16 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={`${post.slug}-p-${i}`} className="mt-4 leading-relaxed text-body-text first:mt-0">
                    {block.text}
                  </p>
                )
              })}
            </div>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-line-soft pt-8">
              {prev ? (
                <Link to="/blog/$slug" params={{ slug: prev.slug }} className="group max-w-[45%]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-body-text">Previous</span>
                  <p className="mt-1 font-bold text-ink group-hover:text-brand">← {prev.title}</p>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link to="/blog/$slug" params={{ slug: next.slug }} className="group max-w-[45%] text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-body-text">Next</span>
                  <p className="mt-1 font-bold text-ink group-hover:text-brand">{next.title} →</p>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </article>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
              <h2 className="font-bold text-ink">Recent Posts</h2>
              <ul className="mt-4 space-y-3">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-sm text-body-text hover:text-brand">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
              <h2 className="font-bold text-ink">Categories</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/blog/category/$name"
                    params={{ name: post.category }}
                    className="text-sm text-body-text hover:text-brand"
                  >
                    Uncategorized
                  </Link>
                </li>
              </ul>
            </div>
            <MediaImage
              src={post.image}
              alt={post.title}
              seed={`sidebar-${post.slug}`}
              className="aspect-[4/3] w-full rounded-2xl border border-line-soft object-cover shadow-sm"
            />
          </aside>
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
