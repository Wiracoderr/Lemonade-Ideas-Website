import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimization ──────────────────────────────────────────────────
  images: {
    formats: ["image/webp"],
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000, // 1 year
  },

  // ── Aggressive cache headers for all static assets ──────────────────────
  async headers() {
    return [
      {
        // Animation frames — immutable, served from Vercel Edge
        source: "/frames/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable",
          },
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      {
        // All other public static assets
        source: "/(logos|images|services|portfolio)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600",
          },
        ],
      },
    ];
  },

  // ── Compiler optimizations ──────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
