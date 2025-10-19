// quartz.config.ts  (root of your repo)
export default {
  site: {
    title: "Illumine",
    baseUrl: "https://benfreking123.github.io/Illumine/",
  },
  build: {
    ignorePatterns: [],           // 👈 required by 4.5.2
    outputDir: "public",          // default, but safe to declare
  },
  theme: {
    css: ["./static/custom.css"],
  },
  plugins: {},
}
