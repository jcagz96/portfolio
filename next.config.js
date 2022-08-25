/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // add the following snippet
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['logosmarcas.net', 'media.graphassets.com'],
  },
};

module.exports = nextConfig
