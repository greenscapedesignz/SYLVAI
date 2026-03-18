import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'your-repo-name' with the EXACT name of your GitHub repository 
  // (e.g., if your repo is github.com/username/sylvai, put '/sylvai/')
  base: '/your-repo-name/', 
});
