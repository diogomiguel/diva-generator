import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-crimson)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "serif"],
      },
      colors: {
        amethyst: "#6B4C9A",
        teal: "#2D9BA8",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};

export default config;
