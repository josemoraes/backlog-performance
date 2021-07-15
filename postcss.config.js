module.exports = {
  plugins: [
    require("postcss-preset-env")(),
    require("cssnano")(),
    require("tailwindcss")(),
    require("autoprefixer")(),
  ],
};
