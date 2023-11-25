import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["San Francisco"]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        {fonts.map((font) => (
          <div key={font} className=" flex justify-center mx-20">
            <div className="pt-20 px-10">
              <Link href={{ pathname: "/sanfrancisco" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  San Francisco
                </h1>
              </Link>
              <p className="py-2 text-[#0F0800]">Designed by Apple</p>
              <p className="pb-6">
                Pro, Mono, Compact, New York, Arabic, Armenian, Georgian, Hebrew
              </p>
              <h1 className="text-3xl text-left text-[#265479] py-4">
                Where to find this typeface?
              </h1>
              <div className="flex justify-left space-x-10">
                <Link
                  href={{
                    pathname: "https://developer.apple.com/fonts/",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Apple Developer
                  </p>
                </Link>
              </div>
            </div>
            <Image
              className="outline outline-[#E6E7E6] rounded-lg outline-2"
              src={"/" + font.toLowerCase() + "typeface.png"}
              alt="Picture of the typeface"
              width={1000}
              height={500}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
