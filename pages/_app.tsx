import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import '@/styles/reset.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
