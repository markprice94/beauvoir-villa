/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: ['**', '', 'static.wixstatic.com'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
