import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <div style={{ padding: "15px" }}>
        <a href="/" className="-m-1.5 p-1.5">
          <img
            className="h-8 w-auto"
            src="/Logo.svg"
            alt="로고 이미지"
            style={{ width: "40px" }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
