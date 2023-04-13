/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  distDir: 'build',
  images: {
    loader: 'akamai',
    path: '/',
  },
  assetPrefix: 'https://exterminatio.github.io/portfolio/',
  homepage: 'https://exterminatio.github.io/portfolio/'
}

export default nextConfig;