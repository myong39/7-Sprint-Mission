import { createContext, ReactNode, useContext } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  login: ({ email, password }: ILoginForm) => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  async function login({ email, password }: ILoginForm) {
    try {
      const res = await axios.post('/auth/signIn', { email, password });
      const resData = res.data;

      localStorage.setItem('accessToken', resData.accessToken);
      localStorage.setItem('refreshToken', resData.refreshToken);
    } catch (error) {
      console.error(error);
    }

    router.push('/');
  }

  async function logout() {
    localStorage.deleteItem('accessToken');
    localStorage.deleteItem('refreshToken');

    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(required: boolean) {
  const router = useRouter();
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
  }

  return context;
}
