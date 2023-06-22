/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      BSC_ADMIN: "0x3569573f392d93704ec54ef1b0865bcf6f659bd7",
      BSC_RUPEECASH: "0xc2d30e3c6d5cfc6abd57d5a6efbeb9bbd73a0c8d"
    }
  }
  
  module.exports = nextConfig