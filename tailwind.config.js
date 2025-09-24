/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbb524",   
        secondary: "#f69917", 
      },
    },
  },
  plugins: [],
};
