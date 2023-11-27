import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const IndexPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    // Add your image upload logic here (e.g., send to server, etc.)
    console.log("Image uploaded:", selectedImage);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="font-Karla font-regular pt-20 mb-20 flex justify-center h-screen m-2">
        <div className="align-middle">
          <div>
            <p className="font-medium text-[#265479] text-6xl text-center pb-2">
              Detect
            </p>
          </div>
          <p className="font-medium text-xl text-center text-[#0F0800] pb-4">
            Please upload a BLACK & WHITE image
          </p>
          <div className="w-[1000px] h-[500px] mt-4 ">
            {!selectedImage && (
              <div className="w-full h-full">
                <div className="bg-[#E6E7E6] outline outline-[#E6E7E6] rounded-lg w-full h-full"></div>
              </div>
            )}
            {selectedImage && (
              <div className="w-full h-full">
                <Image src={selectedImage} alt="Selected" fill={true} />
              </div>
            )}
          </div>
          <div className="flex justify-center space-x-10 mt-4">
            <label className="cursor-pointer text-lg py-2 px-4 rounded-full text-[#265479] outline outline-[#E6E7E6] outline-2 hover:bg-[#265479] hover:text-[#FFFEFB] hover:shadow-md">
              Choose Image
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <button
              onClick={handleImageUpload}
              className="cursor-pointer text-lg py-2 px-4 rounded-full text-[#265479] outline outline-[#E6E7E6] outline-2 hover:bg-[#265479] hover:text-[#FFFEFB] hover:shadow-md"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
