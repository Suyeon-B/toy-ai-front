import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-4 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <span className="text-gray-600 text-sm">
          &copy; 2023 <Link href="https://breakbook.oopy.io/">책너두</Link> All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
