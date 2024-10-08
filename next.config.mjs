/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  //assetPrefix: isProd ? "/kautilya-next/" : "", // Set this to your subdirectory
  // basePath: isProd ? "/kautilya-next" : "", // Set this to your subdirectory
  // trailingSlash: true, // Ensures that paths like /about don't 404

  // output: "export",
  // assetPrefix: "https://webdev.gitam.edu/kautilya-next/",
  // basePath: "/kautilya-next",
};

export default nextConfig;
