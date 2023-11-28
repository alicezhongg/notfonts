import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="font-Karla font-regular fixed top-0 left-0 w-full bg-[#FFFEFB] border-b z-10">
      <div className="flex justify-left space-x-2 text-[#0f0800] text-lg">
        <Link href={{ pathname: "/" }}>
          <div className="flex justify-left pt-2 pl-2">
            <Image
              src="/logo.webp"
              alt="Picture of the logo"
              width={100}
              height={50}
            />
          </div>
          {/* <div className="w-1/8 text-center">
            <p className="font-medium text-[#265479] p-2 ml-2 rounded-md">
              NotFonts
            </p>
          </div> */}
        </Link>
        <Link href={{ pathname: "/detect" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 hover:text-[#265479]">Detect</p>
          </div>
        </Link>
        <Link href={{ pathname: "/browse" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 hover:text-[#265479]">Browse</p>
          </div>
        </Link>

        <Link href={{ pathname: "/search" }}>
          <div className="w-1/8 text-center">
            <p className="p-2 hover:text-[#265479]">Search</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
