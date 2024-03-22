module.exports = {
  // Your other configurations
  typescript: {
    // Specify the version of TypeScript being used
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude the fonts from being processed by Webpack
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          outputPath: "static", // Output path for the fonts
          publicPath: "/_next/static", // Public path for the fonts
        },
      },
    });
  },
};
