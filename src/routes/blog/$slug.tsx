import { createFileRoute, notFound } from '@tanstack/react-router'
import { BlogPost } from '#/features/blog/blog-post'
import { POSTS } from '#/data/posts'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return { post }
  },
})
