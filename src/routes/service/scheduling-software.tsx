import { createFileRoute } from '@tanstack/react-router'
import { SchedulingSoftware } from '#/features/service/scheduling-software'

export const Route = createFileRoute('/service/scheduling-software')({
  component: SchedulingSoftware,
})
