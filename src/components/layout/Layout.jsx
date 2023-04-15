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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col h-screen bg-gray-100 mx-auto">
        <Header />
        <div className="text-black">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
