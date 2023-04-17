/** @type {import('next').NextConfig} */
export async function rewrites() {
  return [
    {
      source: "/:path*",
      destination: "http://54.180.88.28:8080/:path*",
    },
  ];
}
