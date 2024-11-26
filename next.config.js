/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  swcMinify: true,
  images: {
    domains: [`${hostname}`],
  },
};

module.exports = nextConfig;
