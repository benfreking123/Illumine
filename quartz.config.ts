import { defineConfig } from "./quartz/lib/config"
export default defineConfig({
  site: { title: "Illumine", baseUrl: "https://benfreking123.github.io/Illumine/" },
  plugins: {
    // leave defaults
  },
  // Tell Quartz to ship an extra stylesheet
  theme: {
    css: ["./static/custom.css"],
  },
})
