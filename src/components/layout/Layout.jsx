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
      <div className="flex-col min-h-screen bg-gray-100 text-black text-center">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
