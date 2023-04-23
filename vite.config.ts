import { defineConfig, UserConfigExport } from 'vite'

import react from '@vitejs/plugin-react-swc';
import electron from 'vite-plugin-electron';

const electronViteConfig: UserConfigExport = {
  build: { outDir: 'dist-electron', target: 'esnext'},
}

export default defineConfig({
  build: {target: 'esnext', outDir: 'build'},
  plugins: [
    react(),
    electron([
      {
        entry: 'src/backend/main.ts',
        vite: electronViteConfig
      },
      {
        entry: 'src/backend/preload.ts',
        vite: electronViteConfig
      }
    ])
  ],
    
})
