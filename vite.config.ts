
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine the base path - empty for development, repo name for production
  const base = mode === 'production' 
    ? `/${process.env.BASE_URL || ''}/` 
    : '/';
    
  console.log(`Building with base: ${base}`);
    
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
      assetsDir: "assets",
      assetsInlineLimit: 4096, // 4kb
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }
});
