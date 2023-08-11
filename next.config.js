/** @type {import('next').NextConfig} */
require('dotenv/config');
const nextConfig = {
  images: {
    formats:['image/webp'],
    domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net'],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
