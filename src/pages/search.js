import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState([
    "Alice",
    "Droog Heavy",
    "Galvji Regular",
    "Karla Regular",
    "Miller Display Bold",
    "Playfair Display Bold",
    "Proxima Nova ExtraBold",
    "TAN Pearl",
    "ZCOOL Kuai Le",
    "ZCool QingKe HuangYou",
  ]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <p className="flex justify-left m-10 p-1 pl-4 outline outline-[#E6E7E6] rounded-full outline-2 text-xl text-[#0F0800]">
          Search...
        </p>
      </div>
      <div className="m-20 grid grid-cols-3 gap-6">
        {fonts.map((font) => (
          <div
            key={font}
            className="outline outline-[#E6E7E6] rounded-lg outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg"
          >
            <Image
              src={"/" + font.toLowerCase() + "typeface.png"}
              alt="Picture of the graphic"
              width={500}
              height={500}
            />
            <FontBox name={font} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;