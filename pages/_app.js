import Head from 'next/head';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
