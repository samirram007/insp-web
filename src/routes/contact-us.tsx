import { createFileRoute } from '@tanstack/react-router'
import { ContactUs } from '#/features/contact-us/contact-page'

export const Route = createFileRoute('/contact-us')({ component: ContactUs })
