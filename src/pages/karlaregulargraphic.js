import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [font, setFont] = React.useState("Karla Regular");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="font-Karla font-regular pt-20">
        <div key={font} className="flex justify-center mx-20">
          <div className="pt-20 px-10 w-2/5">
            <Link href={{ pathname: "/karlaregulartypeface" }}>
              <h1 className="font-medium text-5xl text-left text-[#265479]">
                Karla Regular
              </h1>
            </Link>
            <p className="text-xl py-6 text-[#0F0800]">
              This a page from a book made by Allie Zhang called On My Way Home.
              This body text is very informational, which is good with Karla, as
              it is a san-serif typeface with rounder shapes.
            </p>
            <Link href={{ pathname: "/karla" }}>
              <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                Go to Typeface
              </p>
            </Link>
          </div>
          <div className="w-3/5">
            <Image
              className="outline outline-[#E6E7E6] rounded-lg outline-2 text-[#0F0800]"
              src={"/" + font.toLowerCase() + "graphic.webp"}
              alt="Picture of the graphic"
              width={980}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
