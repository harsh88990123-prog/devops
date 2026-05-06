import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: "/",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
    },
    reporters: ['verbose'],
    exclude: [
      ...configDefaults.exclude,
      './src/__tests__/integration-test/home.test.tsx',
      './src/__tests__/App.test.tsx',
    ],
    setupFiles: './test-setup.ts',
  },
});
