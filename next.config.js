/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://127.0.0.1:8080/:path*",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
