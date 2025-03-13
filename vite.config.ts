
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
      // Ensure asset URLs are correctly generated
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }
});
