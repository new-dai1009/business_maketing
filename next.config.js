/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'videos.openai.com',
        port: '',
        pathname: '/vg-assets/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'trunghuymarketing.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 