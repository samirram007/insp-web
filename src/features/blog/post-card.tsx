import { Link } from '@tanstack/react-router'
import { MediaImage } from '#/components/media'
import { IconCalendar, IconComment, IconUser } from '#/components/icons'
import type { Post } from '#/data/posts'
import type { Project } from '#/data/projects'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="card-lift group overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden bg-soft">
        <MediaImage
          src={post.image}
          alt={post.title}
          seed={post.slug}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold leading-snug text-ink group-hover:text-brand">{post.title}</h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-body-text">{post.date}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body-text">{post.excerpt}</p>
      </div>
    </Link>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.href}
      className="card-lift group overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden bg-soft">
        <MediaImage
          src={project.image}
          alt={project.title}
          seed={project.slug}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold leading-snug text-ink group-hover:text-brand">{project.title}</h3>
        <p className="mt-2 text-sm text-body-text">{project.excerpt}</p>
      </div>
    </Link>
  )
}

export function PostMeta({ post }: { post: Post }) {
  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-body-text">
      <li className="flex items-center gap-2">
        <IconUser />
        {post.author}
      </li>
      <li className="flex items-center gap-2">
        <IconCalendar />
        {post.date}
      </li>
      <li className="flex items-center gap-2">
        <IconComment />
        No Comments
      </li>
    </ul>
  )
}
