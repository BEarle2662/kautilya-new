/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
// console.log("Is Production", isProd);

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  assetPrefix: isProd ? "/kautilya-next/" : "", // Set this to your subdirectory
  basePath: isProd ? "/kautilya-next" : "", // Set this to your subdirectory
};

export default nextConfig;
