/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1360px",
        lg: "1000px",
        xl: "1200px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        loader: `linear-gradient(#f07e6e, #84cdfa, #5ad1cd);`,
        ua: `linear-gradient(to bottom,
          rgb(9, 77, 224) 0% 56%,
          rgb(245, 236, 66) 56% 100%
        );`,
      },
      fontFamily: {
        amatic: ["var(--font-amatic)"],
        "organic-relief": ["var(--font-organic-relief)"],
        sans: ["var(--font-roboto-serif)", ...defaultTheme.fontFamily.sans],
        slab: ["var(--font-roboto-slab)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      transitionDelay: {
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
    },
    screens: {
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      xs: "480px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
