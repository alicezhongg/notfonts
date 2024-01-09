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
          <h1 className="text-6xl text-center text-[#265479]">
            Allie's Zhang
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%]">
            <p className="text-3xl text-center text-[#265479]">
              Never know where to find typefaces? We got you covered!
            </p>
            <p className="font-light text-2xl text-center text-[#0F0800] pb-10">
              You can even see examples of how they are used in real life!
            </p>
          </div>
            <div className="flex justify-center space-x-10 pt-20 m-2">
              <div className="w-1/5">
                <Link href={{ pathname: "/detect" }}>
                  <p className="text-6xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Detect
                  </p>
                </Link>
                <div className="m-2 text-center text-2xl text-[#0F0800]">
                  <p className="p-1">
                    Need to know what typeface you are looking at? Try our AI
                    detector!
                  </p>
                </div>
              </div>
              <div className="w-1/5">
                <Link href={{ pathname: "/browse" }}>
                  <p className="text-6xl text-center py-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Browse
                  </p>
                </Link>
                <div className="m-2 text-2xl text-center text-[#0F0800]">
                  <p className="p-1">
                    Need inspo for a project? Check out how others using
                    typefaces!
                  </p>
                </div>
              </div>
              <div className="w-1/5">
                <Link href={{ pathname: "/search" }}>
                  <p className="text-6xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Search
                  </p>
                </Link>
                <div className="m-2 text-center text-2xl text-[#0F0800]">
                  <p className="p-1">
                    Need to look for something specific? Look it up here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="relative">
        <Image
          src={"/logo_typefaces.webp"}
          alt="Picture of the Logo Typefaces"
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
};

export default IndexPage;
