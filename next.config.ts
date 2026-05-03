import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/formation-sst",
        destination: "/formation/sst",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
