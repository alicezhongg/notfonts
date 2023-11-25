import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["Highway Gothic"]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        {fonts.map((font) => (
          <div key={font} className=" flex justify-center mx-20">
            <div className="pt-20 px-10">
              <Link href={{ pathname: "/highwaygothic" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  Highway Gothic
                </h1>
              </Link>
              <p className="py-2 text-[#0F0800]">
                Designed by Tobais Frere-Jones
              </p>
              <p className="pb-6 text-[#0F0800]">
                Pro, Mono, Compact, New York, Arabic, Armenian, Georgian, Hebrew
              </p>
              <h1 className="text-3xl text-left text-[#265479] py-4">
                Where to find this typeface?
              </h1>
              <p className="pb-6 text-[#0F0800]">
                Because this typeface is used for highway signs, it is not
                available for download. However, you can find it on the highway,
                or you can find similar typeface called Interstate also designed by
                Tobias Frere-Jones below.
              </p>
              <div className="flex justify-left space-x-10">
                <Link
                  href={{
                    pathname: "https://fonts.adobe.com/fonts/interstate",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Interstate
                  </p>
                </Link>
                <Link
                  href={{
                    pathname: "https://fonts.adobe.com/fonts/interstate-mono",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Interstate Mono
                  </p>
                </Link>
                <Link
                  href={{
                    pathname: "https://fonts.adobe.com/fonts/interstate-pi",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Interstate Pi
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
