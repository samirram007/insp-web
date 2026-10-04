import { createFileRoute } from '@tanstack/react-router'
import { ServiceIndex } from '#/features/service/service-index'

export const Route = createFileRoute('/service/')({ component: ServiceIndex })
