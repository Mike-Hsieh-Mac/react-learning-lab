import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../src/main/resources/static',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      // 注意：這裡用「正則表達式」^/s/ 而不是字串 '/s'。
      // 如果寫成字串 '/s'，Vite 代理是用「路徑開頭是否以這段文字開頭」比對，
      // 而 Vite 自己的原始碼請求 /src/main.jsx 也是「/s」開頭（/s-rc/...），
      // 結果被誤攔截送去打後端 8080，後端沒開就整個開發伺服器連 /src/main.jsx 都載入失敗
      // （這正是你看到的 ECONNREFUSED 錯誤）。用 ^/s/（一定要接著斜線）就能精準只比對
      // /s/xxx 這種短網址轉址路徑，不會誤傷 /src/**。
      '^/s/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
