/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/fitbet-landing',
    assetPrefix: '/fitbet-landing/',
    output: 'export',
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    trailingSlash: true,
};

export default nextConfig;