/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  exportTrailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
