import { defineConfig } from 'vite';

console.log('🟥 vite.config.ts cwd:', process.cwd());
export default defineConfig({
  test: {
    globalSetup: ['./globalSetup.ts'],
  },
});
