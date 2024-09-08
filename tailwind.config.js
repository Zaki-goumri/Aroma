/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aroma: "#00A3A8",
        buttons: "#9BCCA3",
      },
      backgroundImage: {
        "bg": "url('/assets/bg.svg')",
        "merengue": "url('/patisserie/merengue.png')",
        },
    },
  },
  plugins: [],
};