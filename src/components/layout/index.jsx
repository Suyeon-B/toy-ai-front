import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div class="max-w-screen-md mx-auto px-20">
      <div class="flex flex-col min-h-screen bg-gray-100 text-black">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
