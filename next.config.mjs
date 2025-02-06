/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
    basePath: isProd ? 'valentines2025/' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
