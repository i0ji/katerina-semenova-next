import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: '',
  assetPrefix: '.',

  turbopack: {
    resolveAlias: {
      '@': './src',
      '@styles': './src/styles',
    },
  },

  webpack: () => false,
};
