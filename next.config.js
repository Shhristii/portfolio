/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skips ESLint in CI — OK for deploys
  },
  output: "export", // ✅ Required for static export
  images: {
    unoptimized: true, // ✅ Required for static export (disables Image Optimization)
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  reactStrictMode: true, // ✅ Recommended
  compress: true, // ✅ Enables gzip compression (default is true)
  poweredByHeader: false, // ✅ Good for hiding tech stack
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "", // ⚠️ Optional, but often unnecessary
};

module.exports = nextConfig;
