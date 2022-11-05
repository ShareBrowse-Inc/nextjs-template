/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  output: "standalone",
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
