const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/kautilya-next" : ""; // Adjust the base path for production

export const ImagePaths = {
  redGradientBg: `${basePath}/assets/img/bgImages/gradient-bg.jpg`,
  blackShadeImage: `${basePath}/assets/img/bgImages/black-shade.jpg`,
  groupImg: `${basePath}/assets/img/bgImages/faculty-bg.jpg`,
  mppImg: `${basePath}/assets/img/bgImages/masters_banner.jpg`,
  whiteShadeImg: `${basePath}/assets/img/bgImages/studentmix-banner.jpg`,

  governWhiteShadeImg: `${basePath}/assets/img/events/govtExcellenceInitivies/contact_bg.jpg`, // events inner pages
  ppforpgImg: `${basePath}/assets/img/events/publicPolicy/ppforpg.jpg`,
  policyMaking: `${basePath}/assets/img/events/publicPolicy/policy_making.jpg`,
  mppApplication: `${basePath}/assets/img/events/publicPolicy/mpp_application.jpg`,
  masterMpp: `${basePath}/assets/img/events/publicPolicy/masterMPP.jpg`,
  infoSession: `${basePath}/assets/img/events/publicPolicy/info_session_bg.png`,
  footerBg: `${basePath}/assets/img/events/publicPolicy/footer_bg.png`,

  aluminiBg: `${basePath}/assets/img/events/alumni/alumini_bg.jpg`,
  aluminiMidBg: `${basePath}/assets/img/events/alumni/alumini_middle_bg.jpg`,
  aluminiSpeakerBg: `${basePath}/assets/img/events/alumni/alumini_speaker.jpg`,
};
