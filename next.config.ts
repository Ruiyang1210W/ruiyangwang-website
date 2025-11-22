import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Suppress hydration warnings caused by browser extensions like Grammarly
  reactStrictMode: true,
};

export default nextConfig;
