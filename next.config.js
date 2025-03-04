/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['your-image-domain.com'], // Add if you're using external images
  },
}

module.exports = nextConfig 