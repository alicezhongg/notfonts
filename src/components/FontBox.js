import React from "react";
import Image from "next/image";

const FontBox = (props) => {
  return (
    <div>
      <div className="text-[#0f0800] text-xl p-2">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default FontBox;
