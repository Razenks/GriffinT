import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADICIONE ESTA LINHA:
  base: '/GriffinT/', // <-- IMPORTANTE: Coloque o nome EXATO do seu repo aqui!
})