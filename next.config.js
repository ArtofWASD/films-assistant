/** @type {import('next').NextConfig} */
require('dotenv/config');
const nextConfig = {
  images: {
    remoutePatterns: [
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
        port: '',
        pathname: '/images/**',
      }
    ],
    domains: ['st.kp.yandex.net'],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
