import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const removeSpace = (str) => {
  return str.replace(/\s+/g, "");
};

const IndexPage = () => {
  const [font, setFont] = React.useState("San Francisco");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        <div key={font} className=" flex justify-center mx-20">
          <div className="pt-20 px-10 w-2/5">
            <Link href={{ pathname: "/sanfrancisco" }}>
              <h1 className="text-5xl text-left text-[#265479]">
                San Francisco
              </h1>
            </Link>
            <p className="text-xl py-6 text-[#0F0800]">
              The Apple ecosystem uses a font called San Francisco, designed
              specifically for the Apple Ecosystem.
            </p>
            <Link href={{ pathname: "/sanfrancisco" }}>
              <p className="w-1/3 text-xl text-center py-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
