/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you're using
  },
  // Add this if you're using experimental features
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 