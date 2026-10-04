import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  build: {
    rolldownOptions: {
      // @tanstack/react-query ships a "use client" directive for RSC bundlers (Next.js).
      // Vite/TanStack Start don't run a React Server Components layer, so rolldown
      // drops the directive when bundling and warns about it. Silence only that warning.
      onLog(level, log, defaultHandler) {
        if (log.code === 'MODULE_LEVEL_DIRECTIVE' && log.message.includes('node_modules')) {
          return
        }
        defaultHandler(level, log)
      },
    },
  },
  plugins: [
    devtools(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      strategy: ['url', 'baseLocale'],
    }),
    tailwindcss(),
    tanstackStart(),
     nitro({
      preset: 'node-server'
    }),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
 
})

export default config
