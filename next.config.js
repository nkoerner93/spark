module.exports = {
  // Your other configurations
  typescript: {
    // Specify the version of TypeScript being used
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
      },
    ],
  },
};
