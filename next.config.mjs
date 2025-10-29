/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solidbuild-built-to-last.lovable.app",
      },
      {
        protocol: "https",
        hostname: "garden-pride-site.lovable.app",
      },
      {
        protocol: "https",
        hostname: "smooth-finish-pro.lovable.app",
      },
      {
        protocol: "https",
        hostname: "crystalview-shine.lovable.app",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;

