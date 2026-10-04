import { createFileRoute } from '@tanstack/react-router'
import { BlogIndex } from '#/features/blog/blog-index'

export const Route = createFileRoute('/blog/')({ component: BlogIndex })
