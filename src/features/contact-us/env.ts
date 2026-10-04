import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Vite only exposes `.env` entries prefixed with `VITE_` to the app and the
 * Nitro server bundle does not load `.env` at runtime, so the server-only
 * settings are pulled into `process.env` here. Values already present in the
 * environment (e.g. set by the host) take precedence. Importing this module
 * twice is harmless: loading the same file again changes nothing.
 */
const envFile = resolve(process.cwd(), '.env')
if (existsSync(envFile)) {
  process.loadEnvFile(envFile)
}
