import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  // After enabling proxy , the frontend url will be converted to localhost:3000 from localhost:5000 and thus
  // we won't face any error of cross origin policy
  plugins: [react()],
})
