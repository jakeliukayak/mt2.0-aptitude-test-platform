/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/mt2.0-aptitude-test-platform' : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
