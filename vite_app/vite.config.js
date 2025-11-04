import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['three'],
  },
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app'], // ✅ works for all ngrok links
    cors: true, // optional, helps with cross-origin requests
  },
})
