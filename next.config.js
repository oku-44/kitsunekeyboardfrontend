/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  headers: {
    link: [
      {
        rel: 'icon',
        type: 'image/ico',
        href: '/favicon.ico'
      }
    ]
  }
}

module.exports = nextConfig
