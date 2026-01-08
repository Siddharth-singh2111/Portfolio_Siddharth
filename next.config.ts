import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - The NextConfig type is missing the 'eslint' property definition, but it is valid config.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;