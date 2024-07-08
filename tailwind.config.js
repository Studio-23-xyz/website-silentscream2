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
      backgroundImage: {
        "ss2-quill-bg": "url('../../public/assets/silent-scram-2-logo.svg')",
        "ss2-parallax-1":
          "url('../../public/assets/parallax/ss2-hero-bg-layer1.png')",
        "ss2-parallax-2":
          "url('../../public/assets/parallax/ss2-hero-bg-layer2.png')",
        "ss2-parallax-3":
          "url('../../public/assets/parallax/ss2-hero-bg-layer3.png')",
        "ss2-parallax-4":
          "url('../../public/assets/parallax/ss2-hero-bg-layer4.png')",
      },
    },
  },
  plugins: [],
};
