import '/styles/reset.scss';
import '/styles/index.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/header/Header';
import { AuthProvider } from '@/contexts/AuthProvider';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = !['/login', '/signup'].includes(router.pathname);

  return (
    <AuthProvider>
      {showHeader && <Header />}
      <Component {...pageProps} />
    </AuthProvider>
  );
}
