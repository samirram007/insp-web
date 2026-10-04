import nodemailer from 'nodemailer'
import { SITE } from '#/data/site'
import './env'

export type ContactMessage = {
  name: string
  email: string
  subject: string
  message: string
}

const MAIL_FAILURE_MESSAGE =
  'We could not send your message right now. Please try again shortly, or email us directly.'

function required(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable "${name}". Add it to .env`)
  }
  return value
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function deliverContactMessage({
  name,
  email,
  subject,
  message,
}: ContactMessage): Promise<{ acknowledged: boolean }> {
  try {
    const host = required('SMTP_HOST')
    const user = required('SMTP_USER')
    const pass = required('SMTP_PASS')
    const port = Number(process.env.SMTP_PORT ?? 465)
    const to = process.env.CONTACT_TO_EMAIL ?? user

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const title = subject || `Website enquiry from ${name}`

    await transporter.sendMail({
      from: `"Inspirigence Works Website" <${user}>`,
      to,
      replyTo: { name, address: email },
      subject: title,
      text: [`Name: ${name}`, `Email: ${email}`, `Subject: ${title}`, '', message].join('\n'),
      html: `
        <h2>${escapeHtml(title)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    // Acknowledge receipt back to the visitor. Best effort: their message has
    // already reached the team, so a failed copy must not fail the request —
    // the caller just skips the "confirmation sent" wording.
    let acknowledged = false
    try {
      await transporter.sendMail({
        from: `"${SITE.name} Website" <${user}>`,
        to: email,
        subject: `We've received your message — ${SITE.name}`,
        text: [
          `Hi ${name},`,
          '',
          `Thank you for reaching out to ${SITE.name}. This is a quick confirmation that we've`,
          `received your message and our team will get back to you shortly.`,
          '',
          `Subject: ${title}`,
          '',
          'Your message:',
          message,
          '',
          `If you need to reach us sooner, call ${SITE.phone} or email ${SITE.email}.`,
          `Office hours: ${SITE.hours}`,
        ].join('\n'),
        html: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>
            Thank you for reaching out to <strong>${escapeHtml(SITE.name)}</strong>. This is a quick
            confirmation that we've received your message and our team will get back to you shortly.
          </p>
          <p><strong>Subject:</strong> ${escapeHtml(title)}</p>
          <hr />
          <p><strong>Your message:</strong></p>
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
          <hr />
          <p>
            If you need to reach us sooner, call ${escapeHtml(SITE.phone)} or email
            <a href="mailto:${escapeHtml(SITE.email)}">${escapeHtml(SITE.email)}</a>.<br />
            Office hours: ${escapeHtml(SITE.hours)}
          </p>
        `,
      })
      acknowledged = true
    } catch (ackError) {
      console.error('[contact-us] acknowledgment delivery failed:', ackError)
    }

    return { acknowledged }
  } catch (error) {
    // The SMTP dialogue can leak relay details, so keep it in the server log
    // and hand the visitor a neutral message.
    console.error('[contact-us] mail delivery failed:', error)
    throw new Error(MAIL_FAILURE_MESSAGE)
  }
}
