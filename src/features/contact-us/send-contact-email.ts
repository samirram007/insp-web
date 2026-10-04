import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const contactMessageSchema = z.object({
  name: z.string().trim().min(1, 'Please tell us your name').max(120),
  email: z.email('Please enter a valid email address').max(254),
  subject: z.string().trim().max(200),
  message: z.string().trim().min(1, 'Please write a message').max(5000),
})

export type ContactMessageInput = z.infer<typeof contactMessageSchema>

export const sendContactEmail = createServerFn({ method: 'POST' })
  .validator((input: unknown) => contactMessageSchema.parse(input))
  .handler(async ({ data }) => {
    // Imported lazily so the SMTP transport, rate limiter (and `node:`
    // builtins) only ever load on the server, never in the browser bundle.
    const { assertWithinRateLimit } = await import('./rate-limit')
    assertWithinRateLimit()
    const { deliverContactMessage } = await import('./mailer')
    return await deliverContactMessage(data)
  })
