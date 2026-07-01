/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.vimeocdn.com', 'vimeo.com'],
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
