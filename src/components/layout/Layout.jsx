/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>킹너두</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
        />
      </Head>
      <div className="h-screen flex flex-col bg-slate-50 overflow-auto">
        <Header />
        <div className="w-80 text-black mx-auto my-3">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
