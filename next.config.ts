import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  cacheComponents: true,
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
      },
    ],
  },
};

export default nextConfig;
