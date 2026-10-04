import { createFileRoute, notFound } from '@tanstack/react-router'
import { CategoryArchive } from '#/features/blog/blog-category'
import { POSTS } from '#/data/posts'

export const Route = createFileRoute('/blog/category/$name')({
  component: CategoryArchive,
  loader: ({ params }) => {
    const posts = POSTS.filter((p) => p.category === params.name)
    if (posts.length === 0) throw notFound()
    return { posts, category: params.name }
  },
})
