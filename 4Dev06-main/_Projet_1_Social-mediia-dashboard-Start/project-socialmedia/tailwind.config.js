/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forground: "hsl(var(--forground)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        top_bg_pattern: "hsl(var(--top-bg-pattern)/<alpha-value>)",
        card_bg: "hsl(var(--card-bg)/<alpha-value>)",
        card_bg_hover: "hsl(var(--card-bg-hover)/<alpha-value>)",
        text: "hsl(var(--text)/<alpha-value>)",
      }
    },
  },
  plugins: [],
}

