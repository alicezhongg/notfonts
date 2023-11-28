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
          <Image
            src={"/logo_w_bkgd.webp"}
            alt="Picture of the Logo"
            width={1920}
            height={1080}
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-3xl text-center text-[#265479]">
              The page hasn't been made yet XD
            </p>
            <p className="font-light text-2xl text-center text-[#0F0800]">
              Please go back to the home page!
            </p>
            <div className="flex justify-center space-x-10 pt-20 m-2">
              <div className="">
                <Link href={{ pathname: "/" }}>
                  <p className="cursor-pointer text-xl py-2 px-4 rounded-full text-[#265479] outline outline-[#E6E7E6] outline-2 hover:bg-[#265479] hover:text-[#FFFEFB] hover:shadow-md">
                    go home
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
