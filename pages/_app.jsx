import "@/styles/common.css";
import "@/styles/reset.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/boards");
    }
  }, [router]);
  return <Component {...pageProps} />;
}
