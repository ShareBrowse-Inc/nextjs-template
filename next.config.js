/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({
        enabled: process.env.ANALYZE === "true",
      })
    : (config) => config;

module.exports = nextConfig;

// FIXME: 有効にするとi18nが機能しなくなるためコメントアウトしている
// module.exports = withBundleAnalyzer({});
