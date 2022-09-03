const path = require("path");

const localePath = path.resolve("./public/locales");

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  localePath,
};
