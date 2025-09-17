/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // azul por defecto
          light: "#60a5fa",
          dark: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};
