import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'Rick&Morty_PWA',
    short_name: 'Rick&Morty_PWA',
    description: 'PWA example',
    theme_color: '#FFC144',
    icons: [
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'assets/images/favicon.ico',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: 'assets/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: 'assets/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'assets/images/mstile-150x150.png',
        sizes: '270x270',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: 'assets/images/1696461014_gas-kvas-com-p-kartinki-rik-i-morti-15.jpg',
        sizes: '820x919',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: 'assets/images/1696461014_gas-kvas-com-p-kartinki-rik-i-morti-17.jpg',
        sizes: '630x630',
        type: 'image/png',
        form_factor: 'narrow',
      },
    ],
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
    },
  },
})
