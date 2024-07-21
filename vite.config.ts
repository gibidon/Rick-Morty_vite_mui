import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
// import path from 'path'
console.log(import.meta.url)
// import {} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // components: '/src/components',
      // layouts: '/src/layouts',
      // pages: '/src/pages',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
    },
  },
})
