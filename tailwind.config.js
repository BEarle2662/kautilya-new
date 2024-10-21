/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-image": "url('/kautilya-next/assets/img/gradient-bg.jpg')",
        "mpp-background": "url('/assets/img/mpp/mpp.jpg')",
      },
      colors: {
        p: "#424a53",
        primary: "#b11016",
      },

      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans, "sans-serif"],
        gupter: ["Gupter", "serif"],
      },
    },
  },
  plugins: [],
});
