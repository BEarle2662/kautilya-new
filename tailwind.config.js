const { ImagePaths } = require("./src/Endpoints/imagePath");
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
        "red-shade": `url('${ImagePaths.redGradientBg}')`,
        "black-shade": `url('${ImagePaths.blackShadeImage}')`,
        "group-img": `url('${ImagePaths.groupImg}')`,
        "mpp-img": `url('${ImagePaths.mppImg}')`,
        "white-shade": `url('${ImagePaths.whiteShadeImg}')`,
        "govern-white-shade": `url('${ImagePaths.governWhiteShadeImg}')`,
        "pp-for-pgImg": `url('${ImagePaths.ppforpgImg}')`,
        "policy-Making": `url('${ImagePaths.policyMaking}')`,
        "mpp-application": `url('${ImagePaths.mppApplication}')`,
        "mpp-master": `url('${ImagePaths.masterMpp}')`,
        "info-session": `url('${ImagePaths.infoSession}')`,
        "footer-bg": `url('${ImagePaths.footerBg}')`,

        "alumini-bg": `url('${ImagePaths.aluminiBg}')`,
        "alumini-mid-bg": `url('${ImagePaths.aluminiMidBg}')`,
        "alumini-speaker": `url('${ImagePaths.aluminiSpeakerBg}')`,
      },
      colors: {
        p: "#424a53",
        primary: "#b11016",
      },

      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans, "sans-serif"],
      },
    },
  },
  plugins: [],
});
