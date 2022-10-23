/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.licdn.com',
        },
      ],
  }
}

module.exports = nextConfig
