import { createFileRoute } from '@tanstack/react-router'
import { AboutUs } from '#/features/about/about-page'

export const Route = createFileRoute('/about-us')({ component: AboutUs })
