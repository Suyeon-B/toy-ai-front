const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <div>
        <img
          className="h-8 w-auto"
          src="/Logo.svg"
          alt="로고 이미지"
          style={{ width: "40px" }}
        />
      </div>
    </header>
  );
};

export default Header;
