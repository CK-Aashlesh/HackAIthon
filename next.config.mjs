/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ensure Next.js image domain for public assets or remote urls
  images: {
    unoptimized: true // Safe default for migration
  }
};

export default nextConfig;
