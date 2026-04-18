import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          black: "#000000",
          dark: "#080808",
          slate: "#111111",
          gray: "#1a1a1a",
          muted: "#2a2a2a",
          border: "#222222",
          gold: "#C9A96E",
          "gold-light": "#d4b97e",
          "gold-dark": "#b8944f",
          text: "#e8e8e8",
          "text-muted": "#888888",
          "text-dim": "#555555",
          success: "#4ade80",
          danger: "#f87171",
        },
      },
    },
  },
  plugins: [],
};
export default config;