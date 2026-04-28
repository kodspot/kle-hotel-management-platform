import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only — AVIF removed (too memory-intensive for Vercel free tier)
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Aggressive edge caching — served from CDN for 1 year, never re-fetched
  async headers() {
    return [
      {
        // All KLE images in public/kle/ — cache at edge for 1 year
        source: "/kle/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Fonts, icons, other static assets — cache for 30 days
        source: "/:path(.*\\.(?:woff2?|ttf|eot|svg|ico|png|webp|avif))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
