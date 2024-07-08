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
        "parallax-bg1":
          "url('../../public/assets/parallax/ss2-hero-bg-layer1.png')",
        "parallax-bg2":
          "url('../../public/assets/parallax/ss2-hero-bg-layer2.png')",
        "parallax-bg3":
          "url('../../public/assets/parallax/ss2-hero-bg-layer3.png')",
        "parallax-bg4":
          "url('../../public/assets/parallax/ss2-hero-bg-layer4.png')",
        "button-bg": "url('../../public/assets/buttonbg1.png')",
        "banner-bg-ls":
          "url('../../public/assets/banners/ss2-back-banner-ls.png')",
        "banner-bg-lm":
          "url('../../public/assets/banners/ss2-back-banner-lm.png')",
        "banner-bg-ms":
          "url('../../public/assets/banners/ss2-back-banner-ms.png')",
        "banner-bg-mm":
          "url('../../public/assets/banners/ss2-back-banner-mm.png')",
        "quill-bg": "url('../../public/assets/silent-scram-2-logo.svg')",
      },
    },
  },
  plugins: [],
};
