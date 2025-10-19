// quartz.config.ts — must be at repo root, not inside /content
export default {
  site: {
    title: "Illumine",
    description: "Spiritual wiki",
    baseUrl: "https://benfreking123.github.io/Illumine/",
  },

  build: {
    outputDir: "public",         // required key in v4.5.2
    ignorePatterns: [],          // prevents undefined error
    assetsDir: "static",         // optional, safe default
  },

  theme: {
    css: ["./static/custom.css"],
  },

  plugins: {},
}
