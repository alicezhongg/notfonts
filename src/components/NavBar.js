import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#FFFEFB] border-b z-10">
      <div className="flex justify-left space-x-2 text-[#0f0800] text-lg">
        <Link href={{ pathname: "/" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 rounded-md">NotFonts</p>
          </div>
        </Link>
        <Link href={{ pathname: "/browse" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 rounded-md">Browse</p>
          </div>
        </Link>
        <Link href={{ pathname: "/detect" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 rounded-md">Detect</p>
          </div>
        </Link>
        <Link href={{ pathname: "/search" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 rounded-md">Search</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;