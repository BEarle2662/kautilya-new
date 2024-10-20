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
        "brave-bg": `url('${ImagePaths.braveBg}')`,
        "children-policy": `url('${ImagePaths.childrenPolicy}')`,
        "climate-policy": `url('${ImagePaths.climatePolicy}')`,
        "climate-bg-text": `url('${ImagePaths.climateTextPolicy}')`,

        "alumini-bg": `url('${ImagePaths.aluminiBg}')`,
        "alumini-mid-bg": `url('${ImagePaths.aluminiMidBg}')`,
        "alumini-speaker": `url('${ImagePaths.aluminiSpeakerBg}')`,

        "nov-bg-footer": `url('${ImagePaths.novFooter}')`,
        "nov-bg": `url('${ImagePaths.novBg}')`,
        "five-bg": `url('${ImagePaths.fiveBg}')`,
        "five-sep": `url('${ImagePaths.fiveSepBg}')`,
        "play-outlook": `url('${ImagePaths.playOutlook}')`,
        "curr-bg": `url('${ImagePaths.currBg}')`,
        "curr-footer": `url('${ImagePaths.currFooterBg}')`,
        "ai-bg": `url('${ImagePaths.aiBg}')`,
        "budget-bg": `url('${ImagePaths.budgetBg}')`,
        "budget-mid": `url('${ImagePaths.budgetMidBg}')`,
        "multi-lateral": `url('${ImagePaths.multiLateral}')`,
        "multi-lateral-sep": `url('${ImagePaths.multiLateralSep}')`,
        "multi-footer": `url('${ImagePaths.multiFooter}')`,
        "unite-divide": `url('${ImagePaths.uniteDivide}')`,
        "unite-divide-mid": `url('${ImagePaths.uniteDivideMid}')`,
        "career-bg": `url('${ImagePaths.careerBg}')`,
        "impact-footer": `url('${ImagePaths.impactFooterBg}')`,
        "un-packing": `url('${ImagePaths.unPackingBg}')`,
        "un-packing-mid": `url('${ImagePaths.unPackingBgMid}')`,
        "crypto-bg": `url('${ImagePaths.cryptoBg}')`,
        "crypto-mid-bg": `url('${ImagePaths.cryptoMidBg}')`,
        "eco-outlook": `url('${ImagePaths.ecoOutlook}')`,
        "global-bg": `url('${ImagePaths.globalBg}')`,
        "fitness-bg": `url('${ImagePaths.fitnessBg}')`,
        "talk-policy-bg": `url('${ImagePaths.talkPolicyBg}')`,
        "political-bg": `url('${ImagePaths.politicalBg}')`,

        "workforce-bg": `url('${ImagePaths.workForceBg}')`,
        "workforce-mid": `url('${ImagePaths.workForceMidBg}')`,
        "impact-bg": `url('${ImagePaths.impactBg}')`,

        "railway-bg": `url('${ImagePaths.railwayBg}')`,
        "railway-mid": `url('${ImagePaths.railwayMidBg}')`,
        "shape-bg": `url('${ImagePaths.shapeBg}')`,
        "shape-panalist": `url('${ImagePaths.shapePanaListBg}')`,
        "shape-mid": `url('${ImagePaths.shapeMidBg}')`,
        "paksitan-bg": `url('${ImagePaths.paksitanBg}')`,
        "eco-bg": `url('${ImagePaths.economicBg}')`,
        "eco-mid": `url('${ImagePaths.economicMiddleBg}')`,
        "russia-bg": `url('${ImagePaths.russiaBg}')`,
        "russia-sep": `url('${ImagePaths.russiaSepBg}')`,
        "russia-footer": `url('${ImagePaths.russiaFooterBg}')`,
        "master-public": `url('${ImagePaths.masterPubilc}')`,
        "contact-banner": `url('${ImagePaths.contactBanner}')`,
        "page-notfound": `url('${ImagePaths.bgNotfound}')`,
      },
      colors: {
        p: "#424a53",
        primary: "#b11016",
      },

      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans, "sans-serif"],
        gupter: ["Gupter", "serif"],
        whitney: ["Whitney"],
      },
    },
  },
  plugins: [],
});
