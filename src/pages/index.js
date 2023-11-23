import React from "react";
import FontBox from "@/components/FontBox";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["Karla", "ZCOOL Kuai Le", "ZCool QingKe HuangYou", "Alice ", "Playfair Display", "Times New Roman", "Verdana"]);

  return (
    <>
      <div>
        <h1 className="text-9xl text-center mt-[20rem] mb-3">NOTFONTS</h1>
        <p className="text-3xl text-center mb-6">THEY'RE CALLED TYPEFACES</p>
        <div class="flex justify-center space-x-4 m-2">
          <p className="text-6xl text-center border">Browse</p> 
          <p className="text-6xl text-center border" >Detect</p>
        </div>
        {fonts.map((font) => (
          <FontBox key={font} name={font} />
        ))}
      </div>
    </>
  );
};

export default IndexPage;

