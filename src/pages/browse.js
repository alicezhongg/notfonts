import React from "react";
import FontBox from "@/components/FontBox";
import Image from "next/image";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState([
    "Karla",
    "ZCOOL Kuai Le",
    "ZCool QingKe HuangYou",
    "Alice ",
    "Playfair Display",
    "Times New Roman",
    "Verdana",
  ]);

  return (
    <>
      <div className="m-10 grid grid-cols-3 gap-4">
        {fonts.map((font) => (
          <div
            key={font}
            className="outline outline-[#E6E7E6] rounded-lg hover:outline hover:outline-[#265479] hover:shadow-lg"
          >
            <Image
              src={"/" + font.toLowerCase() + "graphic.png"}
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
