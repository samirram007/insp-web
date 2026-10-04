import { createFileRoute } from '@tanstack/react-router'
import { ConsultancyServices } from '#/features/service/consultancy-services'

export const Route = createFileRoute('/service/consultancy-services')({
  component: ConsultancyServices,
})
