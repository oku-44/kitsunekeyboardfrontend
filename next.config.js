/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  head: {
    link: [
      {
        rel: 'icon',
        type: 'image/ico',
        href: '/kitsune.svg'
      }
    ]
  }
}

module.exports = nextConfig
