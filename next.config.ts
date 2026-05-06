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
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'fonts/',
          publicPath: '/_next/static/fonts/',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
