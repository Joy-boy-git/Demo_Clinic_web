import { defineConfig } from 'vite'
// @ts-ignore - Vite React plugin is required by the project build
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve :{
    alias:{
      "@": path.resolve(__dirname, "./src"),
    }
  }
})