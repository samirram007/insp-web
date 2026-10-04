import { getRequestIP } from '@tanstack/react-start/server'
import './env'

export const RATE_LIMIT_MESSAGE =
  "You've sent messages too quickly. Please wait a few minutes and try again."

function envInt(name: string, fallback: number): number {
  const raw = process.env[name]
  if (!raw) return fallback
  const value = Number.parseInt(raw, 10)
  return Number.isFinite(value) && value > 0 ? value : fallback
}

const MAX_ATTEMPTS = envInt('CONTACT_RATE_LIMIT', 5)
const WINDOW_MS = envInt('CONTACT_RATE_LIMIT_WINDOW', 600) * 1000

/** Submission timestamps per client key, pruned as they expire. */
const attempts = new Map<string, number[]>()

function clientKey(): string {
  try {
    // x-forwarded-for is only trustworthy behind a proxy that overwrites it;
    // without it we fall back to the socket address, which is still correct
    // for the direct-to-node-server deployment.
    return getRequestIP({ xForwardedFor: true }) ?? 'unknown'
  } catch {
    // Outside a request context there is no IP to key on — share one bucket
    // rather than bypass the limit.
    return 'unknown'
  }
}

/**
 * Throws a visitor-facing error once `CONTACT_RATE_LIMIT` submissions (default
 * 5) from the same client IP arrive within `CONTACT_RATE_LIMIT_WINDOW`
 * seconds (default 600). In-memory and per-process: the counter resets on
 * restart, which is acceptable for a single-node deployment.
 */
export function assertWithinRateLimit(): void {
  const now = Date.now()
  const cutoff = now - WINDOW_MS

  // Opportunistic sweep so the map cannot grow without bound.
  if (attempts.size > 500) {
    for (const [key, times] of attempts) {
      if (times.every((time) => time <= cutoff)) attempts.delete(key)
    }
  }

  const key = clientKey()
  const recent = (attempts.get(key) ?? []).filter((time) => time > cutoff)

  if (recent.length >= MAX_ATTEMPTS) {
    attempts.set(key, recent)
    console.warn(`[contact-us] rate limit reached for ${key}`)
    throw new Error(RATE_LIMIT_MESSAGE)
  }

  recent.push(now)
  attempts.set(key, recent)
}
