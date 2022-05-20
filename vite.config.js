import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default ({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.js",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Dweller",
        short_name: "D.",
        theme_color: "#1C2027",
        start_url: "/",
        display: "standalone",
        background_color: "#1C2027",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/mixins.scss";`
      }
    }
  }
})
