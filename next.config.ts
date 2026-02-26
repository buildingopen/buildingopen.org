import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/travel-planning',
        destination: '/blog/ai-file-context',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
