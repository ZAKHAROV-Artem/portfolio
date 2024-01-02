/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1360px",
        xl: "1200px",
        lg: "1000px",
      },
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-serif)", ...defaultTheme.fontFamily.sans],
        amatic: ["var(--font-amatic)"],
        slab: ["var(--font-roboto-slab)"],
        "organic-relief": ["var(--font-organic-relief)"],
      },
      transitionDelay: {
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
      backgroundImage: {
        ua: `linear-gradient(to bottom,
          rgb(9, 77, 224) 0% 56%,
          rgb(245, 236, 66) 56% 100%
        );`,
        loader: `linear-gradient(#f07e6e, #84cdfa, #5ad1cd);`,
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
