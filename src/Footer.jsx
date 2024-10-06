import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-800 text-white py-4 w-full flex items-center justify-center">
      <p className="text-sm">
        &copy; {date.getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
