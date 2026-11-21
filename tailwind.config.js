/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090A0B",
        graphite: "#202124",
        racing: "#E32636",
        titanium: "#F4F4F4",
        silver: "#A6A8AC",
        line: "#35373B",
      },
      fontFamily: {
        grotesk: ['"Space Grotesk Variable"', '"Space Grotesk"', "system-ui", "sans-serif"],
        condensed: ['"Barlow Condensed"', '"Arial Narrow"', "sans-serif"],
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
