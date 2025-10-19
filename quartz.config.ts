// Minimal Quartz 4 config. Adjust title/baseUrl.
import { defineConfig } from "./quartz/lib/config"

export default defineConfig({
  site: {
    title: "Illumine",
    description: "Spiritual wiki",
    // Set this to your real URL once Pages is live:
    baseUrl: "https://benfreking123.github.io/Illumine/",
  },
  // Defaults discover /content at build time (we'll create it in CI)
})
