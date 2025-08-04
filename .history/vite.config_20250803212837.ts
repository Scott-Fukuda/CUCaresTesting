import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Use './' instead of absolute path for better flexibility
    base: './',
    
    plugins: [react()],
    
    // Simplified environment variable handling
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    // Improved alias configuration
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Point to src directory instead of root
      }
    },
    
    build: {
      outDir: 'dist',
    },
  };
});