import React from "react";

const Footer = () => {
  return (
    <div className="h-20 flex text-white justify-center py-9 items-end bg-[#121212] text-sm ">
      <p>&copy; Copyright {new Date().getFullYear()} Valentine</p>
    </div>
  );
};

export default Footer;
