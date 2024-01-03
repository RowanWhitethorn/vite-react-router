import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions:{
      input:{
        FAQPage: 'src/pages/FAQPage.tsx',
        HomePage: 'src/pages/HomePage.tsx'
      },
    },
  },
});

