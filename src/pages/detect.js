import React from "react";
import FontBox from "@/components/FontBox";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <div>
        <h1 className="text-9xl text-center mt-[20rem] mb-3">NOTFONTS</h1>
        <p className="text-3xl text-center mb-6">THEY'RE CALLED TYPEFACES</p>
        <div className="flex justify-center space-x-4 m-2">
          <p className="text-6xl text-center rounded-lg hover:outline">
            Detect
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
