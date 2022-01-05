const { dependencies } = require("./package.json");

module.exports = {
  name: "cats",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
    "pubsub-js": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["pubsub-js"],
    },
  },
};
