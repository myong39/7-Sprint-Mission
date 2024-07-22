import "@/styles/common.css";
import "@/styles/reset.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/boards");
    }
  }, [router]);
  return <Component {...pageProps} />;
}
