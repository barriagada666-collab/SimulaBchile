import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin de resolución segura para paquetes CommonJS legados como react-is
const stubReactIsPlugin = () => ({
  name: 'resolve-react-is-stub',
  resolveId(id: string) {
    if (id === 'react-is') {
      return '\0virtual:react-is';
    }
  },
  load(id: string) {
    if (id === '\0virtual:react-is') {
      return `
        export const isElement = () => false;
        export const isValidElementType = () => false;
        export const isFragment = () => false;
        export const ForwardRef = Symbol.for('react.forward_ref');
        export const Memo = Symbol.for('react.memo');
        export default { isElement, isValidElementType, isFragment, ForwardRef, Memo };
      `;
    }
  },
});

export default defineConfig(() => {
  return {
    plugins: [stubReactIsPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rolldownOptions: {
        external: ['react-is', 'recharts'],
      },
      rollupOptions: {
        external: ['react-is', 'recharts'],
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
