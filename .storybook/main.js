module.exports = {
  "stories": [
    "../src/app/components/**/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}