import React from "react";
import "@/styles/globals.css";
import Layout from "@/src/components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currPath = router.asPath;

  useEffect(() => {
    if (currPath.includes("share")) router.push("/");
    if (typeof window !== "undefined" && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
