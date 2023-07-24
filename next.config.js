/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['storage.googleapis.com', 'encrypted-tbn0.gstatic.com'],
  },
  webpack: (config) => {
    // !! nextjs svgr 세팅
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  trailingSlash: true,
};
module.exports = nextConfig;
