/** @type {import('next').NextConfig} */
require('dotenv/config');
const nextConfig = {
  images: {
    domains: ['st.kp.yandex.net'],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
