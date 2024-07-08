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
        silent2_red: "#FF1F00",
        silent2_button_text: "#260202",
        main_gradient_Color1: "#002E3E",
        main_gradient_Color2: "#000000",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
