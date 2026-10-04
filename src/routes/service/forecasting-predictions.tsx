import { createFileRoute } from '@tanstack/react-router'
import { ForecastingPredictions } from '#/features/service/forecasting-predictions'

export const Route = createFileRoute('/service/forecasting-predictions')({
  component: ForecastingPredictions,
})
