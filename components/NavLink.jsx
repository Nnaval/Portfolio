// "use client"
import React from 'react';
import  Link  from 'next/link';

const NavLink = ({ label, path, isExternal }) => {
  return (
    <>
      {isExternal ? (
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {label}
        </a>
      ) : (
        <Link
          href={path}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {label}
        </Link>
      )}
    </>
  );
};

export default NavLink;
