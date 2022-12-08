const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@primary-color": "#000",
    "@btn-primary-color": "#fff",
    "@btn-primary-bg": "#000",
    "@btn-height-base": "47px",
    "@tabs-card-head-background": "#fff",
    "@tabs-card-height": "32px;",
    "@btn-font-weight": "600;",
    "@btn-font-size-sm": "19px",
  },
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
});
