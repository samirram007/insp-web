import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/service/$slug')({
  beforeLoad: ({ params }: { params: { slug: string } }) => {
    const slugs = ['consultancy-services', 'team-practical-views', 'forecasting-predictions', 'scheduling-software']
    if (slugs.includes(params.slug)) {
      throw redirect({ to: '/service/$slug', params: { slug: params.slug }, replace: true })
    }
    throw redirect({ to: '/service', replace: true })
  },
})
