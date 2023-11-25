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
      <div className="pt-20">
        <div key={font} className=" flex justify-center mx-20">
          <div className="pt-20 px-10">
            <Link href={{ pathname: "/highwaygothic" }}>
              <h1 className="text-5xl text-left text-[#265479]">
                Highway Gothic
              </h1>
            </Link>
            <p className="py-6">
              The font designed for highway signs in the United States. There is a whole debate on the typefaces of US Highways, but in the end, Highway Gothic has prevailed.
            </p>
            <Link href={{ pathname: "/highwaygothic" }}>
              <p className="w-1/3 text-xl text-center py-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                Go to Typeface
              </p>
            </Link>
          </div>
          <Image
            className="outline outline-[#E6E7E6] rounded-lg outline-2"
            src={"/" + font.toLowerCase() + "graphic.png"}
            alt="Picture of the graphic"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
