import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://gejordev-portfolio.vercel.app',
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    sitemap({
      customPages: [
        'https://gejordev-portfolio.vercel.app/es/',
        'https://gejordev-portfolio.vercel.app/en/',
      ],
    }),
  ],
})
