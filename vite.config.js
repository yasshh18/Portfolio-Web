import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-Web/', // 👈 ye tera repo name hai
  plugins: [react()],
})
