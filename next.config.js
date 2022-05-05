/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["192.168.1.109"],
  },
  publicRuntimeConfig: { host: process.env.HOST },
};

module.exports = nextConfig;
