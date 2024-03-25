// next.config.js
const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add resolve alias for font files
    config.resolve.alias["./fonts/slick.svg"] = path.resolve(
      __dirname,
      "public/fonts/slick.svg",
    );
    config.resolve.alias["./fonts/slick.eot"] = path.resolve(
      __dirname,
      "public/fonts/slick.eot",
    );
    config.resolve.alias["./fonts/slick.woff"] = path.resolve(
      __dirname,
      "public/fonts/slick.woff",
    );
    config.resolve.alias["./fonts/slick.ttf"] = path.resolve(
      __dirname,
      "public/fonts/slick.ttf",
    );

    return config;
  },
};
