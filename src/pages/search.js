import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState([
    "Adobe Jenson Pro",
    "Alice",
    "Droog",
    "Galvji",
    "HanziPen TC",
    "Highway Gothic",
    "Karla",
    "Lantinghei SC",
    "LingWai TC",
    "Miller Display",
    "Playfair Display",
    "Proxima Nova",
    "Rajdhani",
    "San Francisco",
    "TAN Pearl",
    "Wawati SC",
    "蘋方-繁",
  ]);

  const removeSpace = (str) => {
    return str.replace(/\s+/g, "");
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <p className="font-Karla font-regular flex justify-left m-10 mt-20 p-1 pl-4 outline outline-[#E6E7E6] rounded-full outline-2 text-xl text-[#0F0800]">
          Search...
        </p>
      </div>
      <div className="font-Karla font-regular m-10 grid grid-cols-3 gap-4">
        {fonts.map((font) => (
          <div
            key={font}
            className="outline outline-[#E6E7E6] bg-[#FFFFFF] rounded-lg outline-2 hover:outline-[#265479] hover:shadow-lg "
          >
            <Link href={"/" + removeSpace(font.toLowerCase())}>
              <Image
                src={"/" + font.toLowerCase() + ".png"}
                alt="Picture of the typeface"
                width={500}
                height={500}
              />
            </Link>
            <FontBox name={font} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;