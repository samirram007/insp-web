import { createFileRoute } from '@tanstack/react-router'
import { Home } from '#/features/home/home-page'

export const Route = createFileRoute('/')({ component: Home })
