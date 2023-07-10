/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/settings",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig
