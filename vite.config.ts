
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get repo name from environment variable for GitHub Pages
  const repoName = process.env.BASE_URL || '';
  
  // Determine the base path - empty for development, repo name for production
  const base = mode === 'production' && repoName 
    ? `/${repoName}/` 
    : '/';
    
  console.log(`Building with base: ${base}`);
  console.log(`Mode: ${mode}`);
  console.log(`Repo name from env: ${repoName}`);
    
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base: base,
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  }
});
