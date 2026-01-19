/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/mt2.0-aptitude-test-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mt2.0-aptitude-test-platform' : '',
};

module.exports = nextConfig;
