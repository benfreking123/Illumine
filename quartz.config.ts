// quartz.config.ts
export default {
  site: {
    title: "Illumine",
    description: "Spiritual wiki",
    baseUrl: "https://benfreking123.github.io/Illumine/",
  },
  build: {
    outputDir: "public",
    ignorePatterns: [],
    assetsDir: "static",
  },
  theme: { css: ["./static/custom.css"] },
  plugins: {},
}
