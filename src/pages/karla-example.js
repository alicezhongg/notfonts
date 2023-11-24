import React from "react";
import FontBox from "@/components/FontBox";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  return (
    <>
      <div>
        <h1 className="text-9xl text-center mt-[20rem] mb-3">Karla</h1>
        <div className="m-10 grid grid-cols-3 gap-4">
          {fonts.map((font) => (
            <div
              key={font}
              className="outline outline-[#E6E7E6] rounded-lg outline-2 hover:outline hover:outline-[#265479] hover:shadow-lg"
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
      </div>
    </>
  );
};

export default IndexPage;
