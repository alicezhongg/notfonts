import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="font-Karla font-regular flex items-center justify-center h-screen">
        <div className="align-middle">
          <div className="flex justify-center">
            <Image
            src="/logo.png"
            alt="Picture of the logo"
            width={800}
            height={300}
          />
          </div>
          {/* <h1 className="text-9xl font-extrabold text-center text-[#265479] pb-3">
            NOTFONTS
          </h1> */}
          <div>
            <p className="text-3xl text-center text-[#0F0800]">
              Never know where to find typefaces? We got you covered!
            </p>
            <p className="text-3xl text-center text-[#0F0800] pb-10">
              You can even see examples of how they are used in real life!
            </p>
            <div className="flex justify-center space-x-20 m-2">
              <div className="w-1/5">
                <Link href={{ pathname: "/browse" }}>
                  <p className="text-6xl text-center py-2 rounded-full text-[#265479] outline outline-[#E6E7E6] outline-2 hover:bg-[#265479] hover:text-[#FFFEFB] hover:shadow-md">
                    Browse
                  </p>
                </Link>
                <div className="m-2 text-2xl text-center text-[#0F0800]">
                  <p className="p-1">
                    Need inspo for a specific project? Check out how others use
                    fonts!
                  </p>
                </div>
              </div>
              <div className="w-1/5">
                <Link href={{ pathname: "/detect" }}>
                  <p className="text-6xl text-center p-2 rounded-full text-[#265479] outline outline-[#E6E7E6] outline-2 hover:bg-[#265479] hover:text-[#FFFEFB] hover:shadow-md">
                    Detect
                  </p>
                </Link>
                <div className="m-2 text-center text-2xl text-[#0F0800]">
                  <p className="p-1">
                    Want to know what font is being used? Try out our AI
                    typeface detection!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
