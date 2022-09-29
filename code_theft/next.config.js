/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["joeschmoe.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/sign",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
