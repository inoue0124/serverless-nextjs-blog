module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register"
  ]
}