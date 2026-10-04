import { createFileRoute } from '@tanstack/react-router'
import { TeamPracticalViews } from '#/features/service/team-practical-views'

export const Route = createFileRoute('/service/team-practical-views')({
  component: TeamPracticalViews,
})
