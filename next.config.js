/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/delete_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/delete_temped",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/woody",
        destination: "/about/me/woody",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
