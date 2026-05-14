import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Test-App/",
  plugins: [react()],
  publicDir: "public"
})
