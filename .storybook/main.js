module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  core: {
    builder: "webpack5",
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      legacyRootApi: true,
    },
  },
  docs: {
    autodocs: true,
  },
};
