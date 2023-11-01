/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["InterVariable", "Inter", "sans-serif"],
        sans: ["Swanky and Moo Moo", "sans-serif"],
        orelaga: ["Orelega One", "sans-serif"],
        handraw: ["Delicious Handrawn", "sans-serif"],
      },
      colors: {
        automn: {
          100: "#FEF3ED",
          200: "#E6DBD0",
          300: "#C6BFA9",
          400: "#C59082",
        },
        winter: {
          100: "#D7D1CF",
          200: "#99999C",
          300: "#8B9097",
          400: "#747B84",
        },
      },
    },
  },
  plugins: [],
};
