/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
};

const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" })
    : (config) => config;

module.exports = nextConfig;
module.exports = withBundleAnalyzer({});
