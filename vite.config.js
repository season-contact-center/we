import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3333,
    origin: 'https://ac4d-77-239-162-230.ngrok-free.app',
   
}});