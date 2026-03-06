import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hundeo.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
