import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/react-fontawesome",
  ],
};

export default nextConfig;
