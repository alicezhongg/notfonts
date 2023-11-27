import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [font, setFont] = React.useState("Highway Gothic");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="font-Karla font-regular pt-20">
        <div key={font} className=" flex justify-center mx-20">
          <div className="pt-20 px-10 w-2/5">
            <Link href={{ pathname: "/highwaygothic" }}>
              <h1 className="text-5xl text-left text-[#265479]">
                Highway Gothic
              </h1>
            </Link>
            <p className="text-xl py-6 text-[#0F0800]">
              The typeface Highway Gothic is designed for highway signs in the
              United States. There is a whole debate on the typefaces of US
              Highways, but in the end, Highway Gothic has prevailed.
            </p>
            <Link href={{ pathname: "/highwaygothic" }}>
              <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                Go to Typeface
              </p>
            </Link>
          </div>
          <div className="w-3/5">
            <Image
              className="outline outline-[#E6E7E6] rounded-lg outline-2"
              src={"/" + font.toLowerCase() + "graphic.png"}
              alt="Picture of the graphic"
              width={980}
              height={500}
            />
            <p className="font-light italic">
              source: Creative Commons, Doug Kerr
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
