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
  braveBg: `${basePath}/assets/img/events/publicPolicy/brave_bg.jpg`,
  childrenPolicy: `${basePath}/assets/img/events/publicPolicy/children_bg.jpg`,
  climatePolicy: `${basePath}/assets/img/events/publicPolicy/climate_bg.jpg`,
  climateTextPolicy: `${basePath}/assets/img/events/publicPolicy/3-a.jpg`,

  aluminiBg: `${basePath}/assets/img/events/alumni/alumini_bg.jpg`,
  aluminiMidBg: `${basePath}/assets/img/events/alumni/alumini_middle_bg.jpg`,
  aluminiSpeakerBg: `${basePath}/assets/img/events/alumni/alumini_speaker.jpg`,

  novFooter: `${basePath}/assets/img/talkseries/talkpolicy/november_footer_bg.jpg`,
  novBg: `${basePath}/assets/img/talkseries/talkpolicy/november_bg.jpg`,
  fiveBg: `${basePath}/assets/img/talkseries/talkpolicy/5g_bg.jpg`,
  fiveSepBg: `${basePath}/assets/img/talkseries/talkpolicy/5g_spe_bg.jpg`,
  currBg: `${basePath}/assets/img/talkseries/talkpolicy/curr_bg.jpg`,
  currFooterBg: `${basePath}/assets/img/talkseries/talkpolicy/curr_footer_bg.jpg`,
  aiBg: `${basePath}/assets/img/talkseries/talkpolicy/ai_bg.jpg`,
  budgetBg: `${basePath}/assets/img/talkseries/talkpolicy/budget_bg.jpg`,
  budgetMidBg: `${basePath}/assets/img/talkseries/talkpolicy/budget_middle_bg.jpg`,
  multiLateral: `${basePath}/assets/img/talkseries/talkpolicy/multilateral_bg.jpg`,
  multiLateralSep: `${basePath}/assets/img/talkseries/talkpolicy/multilateral_spe_bg.jpg`,
  multiFooter: `${basePath}/assets/img/talkseries/talkpolicy/multilateral_footer.jpg`,

  playOutlook: `${basePath}/assets/img/talkseries/publicpolicy/playoutlook_bg.jpg`,
};
