import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [font, setFont] = React.useState("Playfair Display Bold");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
          <div key={font} className=" flex justify-center mx-20">
            <div className="pt-20 px-10">
              <Link href={{ pathname: "/karlaregulartypeface" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  Playfair Display Bold
                </h1>
              </Link>
              <p className="py-6">
                This a chapter opener from a book made by Allie Zhang called On My Way
                Home. This chapter opener needs to go well with the font chosen for the body text, which is Karla, a san-serif typeface with rounder shapes. Pairing this rounder san-serif font with a rounded-edged serif font is a good choice. 
              </p>
              <Link href={{ pathname: "/playfairdisplay" }}>
                <p className="w-1/3 text-xl text-center py-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                  Go to Typeface
                </p>
              </Link>
            </div>
            <Image
              className="outline outline-[#E6E7E6] rounded-lg outline-2 text-[#0F0800]"
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
