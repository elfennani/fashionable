import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        "fade-in": "fadeIn 200ms ease-in-out",
        "fade-out": "fadeOut 200ms ease-in-out",
        "slide-in-left": "slideInLeft 200ms ease-in-out",
        "slide-out-left": "slideOutLeft 200ms ease-in-out",
        "slide-in-right": "slideInRight 200ms ease-in-out",
        "slide-out-right": "slideOutRight 200ms ease-in-out",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      }),
    },
  },
  plugins: [
    addIconSelectors(["teenyicons", "heroicons-outline"]),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
