import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sitemapPlugin } from './scripts/generate-sitemap.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
  ssgOptions: {
    // `/pt` -> `/pt/index.html`, so URLs stay directory-style on Vercel.
    dirStyle: 'nested',
    formatting: 'none',
    // Inlining critical CSS removes the render-blocking stylesheet on first paint.
    beastiesOptions: {
      preload: 'swap',
      pruneSource: false
    }
  }
})
