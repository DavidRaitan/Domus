import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Vite's file-access check rejects paths containing ':' (this repo lives under "Claude: AI").
    // Only affects the local dev server, not production builds.
    fs: { strict: false },
  },
})
