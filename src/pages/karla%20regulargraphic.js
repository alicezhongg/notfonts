import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["Karla Regular"]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        {fonts.map((font) => (
          <div
            key={font}
            className=" flex justify-center mx-20 outline outline-[#E6E7E6] rounded-lg outline-2 hover:outline-[#265479] hover:shadow-lg"
          >
            <Image
              src={"/" + font.toLowerCase() + "graphic.png"}
              alt="Picture of the graphic"
              width={1000}
              height={500}
            />
            <div className="pt-20">
              <Link href={{ pathname: "/karlaregulartypeface" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  Karla Regular
                </h1>
              </Link>
              <p className="py-6">
                This a page from a book I made called On My Way Home. This books
                needs to express clear and research information, so Karla is a
                good choice as it is a San-Serif Typeface.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
