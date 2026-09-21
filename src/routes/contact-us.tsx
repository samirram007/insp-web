import { createFileRoute } from '@tanstack/react-router'
import { PageHero, LogoStrip } from '#/components/sections'
import { SITE } from '#/data/site'

export const Route = createFileRoute('/contact-us')({ component: ContactUs })

const CONTACT_ITEMS = [
  { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: SITE.addressShort, href: SITE.mapLinkUrl },
]

function ContactUs() {
  return (
    <>
      <PageHero
        variant="indigo"
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        lead="Get to know how Inspirigence Works can impact your energy efficiency — write to us and our team will get back to you."
      />

      <section className="site-container py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <form
            className="rounded-2xl border border-line-soft bg-white p-8 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault()
              window.alert('Thank you for reaching out! We will get back to you shortly.')
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Name</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-line-soft bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-line-soft bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Subject</span>
              <input
                name="subject"
                className="w-full rounded-xl border border-line-soft bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="How can we help?"
              />
            </label>
            <label className="mt-6 block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                className="w-full rounded-xl border border-line-soft bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Tell us about your requirements"
              />
            </label>
            <button type="submit" className="btn-brand mt-8">
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand">{item.label}</h2>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="mt-2 block font-semibold text-ink hover:text-brand"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 font-semibold text-ink">{item.value}</p>
                )}
              </div>
            ))}

            {/* Office hours */}
            <div className="rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand">Office Hours</h2>
              <p className="mt-2 font-semibold text-ink">{SITE.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location map */}
      <section className="site-container pb-20">
        <div className="overflow-hidden rounded-2xl border border-line-soft bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8">
            <div>
              <span className="section-eyebrow">FIND US</span>
              <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">Our Location</h2>
            </div>
            <a
              href={SITE.mapLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-brand"
            >
              Get Directions ↗
            </a>
          </div>
          <div className="map-frame mt-6">
            <iframe
              src={SITE.mapEmbedUrl}
              title="Inspirigence Works office location map — Birati, North Dumdum, West Bengal"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="px-8 py-6 text-sm text-body-text">{SITE.address}</p>
        </div>
      </section>

      <LogoStrip />
    </>
  )
}
