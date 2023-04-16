import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-200 flex justify-center items-center">
      <a href="/" className="p-3">
        <img className="h-8" src="/Logo.svg" alt="로고 이미지" />
      </a>
    </header>
  );
};

export default Header;
