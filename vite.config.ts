import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import electron from 'vite-plugin-electron';

export default defineConfig({
  build: {target: 'esnext', outDir: 'build'},
  plugins: [
    react(),
    electron([
      {
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts'
      }
    ])
  ],
    
})
