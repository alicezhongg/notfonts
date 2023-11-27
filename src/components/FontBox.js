import React from "react";
import Image from "next/image";

const FontBox = (props) => {
  return (
    <div>
      <div className="font-Karla font-regular text-[#0f0800] text-xl p-4">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default FontBox;
