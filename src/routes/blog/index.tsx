import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHero, LogoStrip, CtaBanner } from '#/components/sections'
import { PostCard } from '#/features/blog/post-card'
import { POSTS, BLOG_CATEGORIES } from '#/data/posts'

export const Route = createFileRoute('/blog/')({ component: BlogIndex })

function BlogIndex() {
  return (
    <>
      <PageHero
        variant="cerulean"
        eyebrow="INSIGHTS"
        title="Blog"
        lead="Updates, notes, and stories from the Inspirigence Works team."
      />

      <section className="site-container py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink">Categories:</span>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to="/blog/category/$name"
              params={{ name: cat.slug }}
              className="rounded-full border border-line-soft bg-white px-4 py-1.5 text-sm font-medium text-body-text transition hover:border-brand hover:text-brand"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      <LogoStrip />
      <CtaBanner />
    </>
  )
}
