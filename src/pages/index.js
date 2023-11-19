import React from "react";
import FontBox from "@/components/FontBox";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["Karla", "Comic Sans MS", "Inter", "ITC Garamond", "Roboto", "Times New Roman", "Verdana"]);

  return (
    <>
      <div>
        <h1 className="text-6xl text-center">NOTFONTS</h1>
        <p>they're called typefaces</p>

        {fonts.map((font) => (
          <FontBox key={font} name={font} />
        ))}
      </div>
    </>
  );
};

export default IndexPage;

