/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
          'xxs': '320px',
          'xs': '375px',
          'sm': '425px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
    extend: {
      colors: {
        aroma: "#00A3A8",
        buttons: "#9BCCA3",
      },
      
      backgroundImage: {
        "bg": "url('/assets/bg.svg')",
        "merengue": "url('/patisserie/merengue.png')",
        "macarons": "url('/patisserie/macarons.png')",
        },
       
    },
  },
  plugins: [],
};
