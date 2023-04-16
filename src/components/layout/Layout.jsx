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
      <div className="h-screen min-h-screen flex flex-col bg-gray-100 mx-auto">
        <Header />
        <div className="flex-grow text-black">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
