import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-roboto)", ...fontFamily.sans],
      serif: ["var(--font-merriweather)", ...fontFamily.serif],
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", translate: "0 -1.5rem" },
          "100%": { opacity: "1", translate: "0 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
