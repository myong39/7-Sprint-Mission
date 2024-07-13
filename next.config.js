/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    // 서버 또는 클라이언트에서 Webpack 캐시 비활성화
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};
