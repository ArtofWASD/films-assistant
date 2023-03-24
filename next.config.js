/** @type {import('next').NextConfig} */
require('dotenv/config');
const nextConfig = {
  images: {
    domains: ['kinopoiskapiunofficial.tech'],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
