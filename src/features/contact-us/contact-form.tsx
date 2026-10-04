import { useState } from 'react'
import type { FormEvent } from 'react'
import { sendContactEmail } from './send-contact-email'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const GENERIC_ERROR = 'We could not send your message right now. Please try again shortly.'

function describeError(error: unknown): string {
  if (!(error instanceof Error)) return GENERIC_ERROR
  // Validation failures come back as a long JSON payload — show a human message instead.
  return error.message.length < 200 ? error.message : GENERIC_ERROR
}

const FIELD_CLASS =
  'w-full rounded-xl border border-line-soft bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = new FormData(form)

    setStatus('sending')
    setFeedback('')

    try {
      const result = await sendContactEmail({
        data: {
          name: String(values.get('name') ?? ''),
          email: String(values.get('email') ?? ''),
          subject: String(values.get('subject') ?? ''),
          message: String(values.get('message') ?? ''),
        },
      })
      form.reset()
      setStatus('sent')
      setFeedback(
        result?.acknowledged
          ? `Thank you for reaching out! We've sent a confirmation to your email and will get back to you shortly.`
          : 'Thank you for reaching out! We will get back to you shortly.',
      )
    } catch (error) {
      setStatus('error')
      setFeedback(describeError(error))
    }
  }

  const sending = status === 'sending'

  return (
    <form
      className="rounded-2xl border border-line-soft bg-white p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Name</span>
          <input
            required
            name="name"
            disabled={sending}
            className={FIELD_CLASS}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            disabled={sending}
            className={FIELD_CLASS}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">Subject</span>
        <input
          name="subject"
          disabled={sending}
          className={FIELD_CLASS}
          placeholder="How can we help?"
        />
      </label>
      <label className="mt-6 block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          disabled={sending}
          className={FIELD_CLASS}
          placeholder="Tell us about your requirements"
        />
      </label>

      {feedback ? (
        <p
          role={status === 'error' ? 'alert' : 'status'}
          className={`mt-6 rounded-xl px-4 py-3 text-sm font-semibold ${
            status === 'error'
              ? 'bg-red-50 text-red-700'
              : 'bg-brand/10 text-brand'
          }`}
        >
          {feedback}
        </p>
      ) : null}

      <button type="submit" disabled={sending} className="btn-brand mt-8 disabled:opacity-60">
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
