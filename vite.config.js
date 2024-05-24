import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const fAvePath = "src";


export default defineConfig({
  root: fAvePath,
  build: {
    outDir: '../dist', // catalog vite
  },
  server: {
    port: 3010,
  },
  plugins: [react()],
})
