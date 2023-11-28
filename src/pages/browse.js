import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState([
    "Adobe Jenson Pro Light Caption",
    "Alice",
    "Droog Heavy",
    "Galvji Regular",
    "HanziPen TC Regular",
    "Highway Gothic",
    "Karla Regular",
    "Lantinghei SC Extralight",
    "LingWai TC Medium",
    "Miller Display Bold",
    "Playfair Display Bold",
    "Proxima Nova ExtraBold",
    "Rajdhani Medium",
    "San Francisco",
    "TAN Pearl",
    "Wawati SC Regular",
    "蘋方-繁 Medium",
  ]);

  const removeSpace = (str) => {
    return str.replace(/\s+/g, "");
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="m-10 grid grid-cols-3 gap-4 mt-20">
        {fonts.map((font) => (
          <div
            key={font}
            className="font-Karla font-regular outline outline-[#E6E7E6] rounded-lg outline-2 hover:outline-[#265479] hover:shadow-lg"
          >
            <Link href={"/" + removeSpace(font.toLowerCase()) + "graphic"}>
              <Image
                src={"/" + font.toLowerCase() + "graphic.png"}
                alt="Picture of the graphic"
                width={600}
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
