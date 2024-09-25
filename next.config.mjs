/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/fitbet-landing',
    assetPrefix: '/fitbet-landing/',
    output: 'export',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;