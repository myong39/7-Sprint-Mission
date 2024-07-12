import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/common.css";
import "@/styles/Header.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
