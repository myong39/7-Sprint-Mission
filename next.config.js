const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "example.com", 
      "panda-market-api.vercel.app",
    ],
  },
  webpack: (config, { isServer }) => {
    // 서버 또는 클라이언트에서 Webpack 캐시 비활성화
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
