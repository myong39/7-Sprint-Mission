import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 이게 맞는지 잘 모르겠습니다 ㅠ
instance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config!;
    if (error.response?.status === 401) {
      try {
        const refToken = localStorage.getItem('refreshToken');
        await instance.post('/auth/refresh-token', refToken);
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
