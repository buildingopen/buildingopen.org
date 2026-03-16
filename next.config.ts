import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/travel-planning',
        destination: '/blog/ai-file-context',
        permanent: true,
      },
      {
        source: '/openqueen',
        destination: '/openqueen/index.html',
        permanent: false,
      },
      {
        source: '/manifesto',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
