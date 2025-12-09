/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Use static export mode
    trailingSlash: true,  // Optional, but useful for static export
    images: { unoptimized: true },
    basePath: '/en',
  };
  
  export default nextConfig;
  