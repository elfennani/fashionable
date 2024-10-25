/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			display: ["var(--font-display)"]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 200ms ease-in-out',
  			'fade-out': 'fadeOut 200ms ease-in-out',
  			'slide-in-left': 'slideInLeft 200ms ease-in-out',
  			'slide-out-left': 'slideOutLeft 200ms ease-in-out',
  			'slide-in-right': 'slideInRight 200ms ease-in-out',
  			'slide-out-right': 'slideOutRight 200ms ease-in-out'
  		},
  		keyframes: '() => ({\n        fadeIn: {\n          "0%": { opacity: "0%" },\n          "100%": { opacity: "100%" },\n        },\n        fadeOut: {\n          "0%": { opacity: "100%" },\n          "100%": { opacity: "0%" },\n        },\n        slideInLeft: {\n          "0%": { transform: "translateX(-100%)" },\n          "100%": { transform: "translateX(0%)" },\n        },\n        slideInRight: {\n          "0%": { transform: "translateX(100%)" },\n          "100%": { transform: "translateX(0%)" },\n        },\n        slideOutLeft: {\n          "0%": { transform: "translateX(0%)" },\n          "100%": { transform: "translateX(-100%)" },\n        },\n        slideOutRight: {\n          "0%": { transform: "translateX(0%)" },\n          "100%": { transform: "translateX(100%)" },\n        },\n      })',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    addIconSelectors(["teenyicons", "heroicons-outline"]),
    require("tailwind-scrollbar-hide"),
      require("tailwindcss-animate")
],
};
export default config;
