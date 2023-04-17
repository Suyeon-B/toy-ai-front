/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-unused-vars
const nextConfig = {
  reactStrictMode: true,
};

// eslint-disable-next-line no-undef
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: " :path*",
      },
    ];
  },
};
