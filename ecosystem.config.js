module.exports = {
  apps: [
    {
      name: "kautilya-next",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        // API_KEY: "your_api_key",
        NEXT_PUBLIC_API_URL: "https://webdev.gitam.edu/kautilya-next/",
        // Add other environment variables here
      },
    },
  ],
};
