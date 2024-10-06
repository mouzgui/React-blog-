import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 w-full h-16 flex items-center justify-center shadow-md">
      <h1 className="text-white text-2xl font-semibold tracking-wide">
        {title}
      </h1>
    </header>
  );
};

export default Header;
