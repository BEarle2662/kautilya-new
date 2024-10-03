const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/kautilya-next" : ""; // Adjust the base path for production

export const ImagePaths = {
  redGradientBg: `${basePath}/assets/img/bgImages/gradient-bg.jpg`,
  blackShadeImage: `${basePath}/assets/img/bgImages/black-shade.jpg`,
  groupImg: `${basePath}/assets/img/bgImages/faculty-bg.jpg`,
};
