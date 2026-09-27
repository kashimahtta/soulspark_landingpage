import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f5ef",
        plum: "#382d3b",
        lavender: "#ebe4ef",
        gold: "#d9a441",
        charcoal: "#27242a",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        accent: ["Caveat", "cursive"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
