import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Replace 'SYLVAI' with your exact GitHub repository name
  base: "/SYLVAI/",
});
