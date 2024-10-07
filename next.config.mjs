import path from "path";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["react"] = path.resolve("./node_modules/react");
      config.resolve.alias["react-dom"] = path.resolve(
        "./node_modules/react-dom"
      );
    }
    return config;
  },
  // output: "export",
  // assetPrefix: "https://webdev.gitam.edu/kautilya-next/",
  // assetPrefix: "https://guprojects.gitam.edu/ksppnext",
  // basePath: "/kautilya-next",
  // basePath: "/ksppnext",
};

export default nextConfig;
