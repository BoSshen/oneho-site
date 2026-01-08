/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'succinct-dogs.localsite.io',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'anthropographic-patchily-carletta.ngrok-free.dev',
      },
      {
        protocol: 'https',
        hostname: 'anthropographic-patchily-carletta.ngrok-free.app',
      },
    ],
  },
};

module.exports = nextConfig;
