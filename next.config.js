/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "assets.example.com",
  //       port: "",
  //       pathname: "/account123/**",
  //     },
  //   ],
  // },
  webpack: (config, { isServer }) => {
    // 서버 또는 클라이언트에서 Webpack 캐시 비활성화
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
