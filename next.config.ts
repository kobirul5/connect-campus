import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.daisyui.com'],
  },
   plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default nextConfig;
