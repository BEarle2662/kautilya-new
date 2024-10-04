/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  assetPrefix: "https://webdev.gitam.edu/kautilya-next/",
  basePath: "/kautilya-next",
};

export default nextConfig;
