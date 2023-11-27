import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const IndexPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [detectedFont, setDetectedFont] = useState(null);
  const [fontMap, setFontMap] = useState([{
    filename: "karla.png",
    font: "karla",
  }]);

  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };

  const handleImageUpload = () => {
    setIsLoading(true); 

    const randomTime = Math.random() * 2000 + 1000; // 1-3 seconds

    setTimeout(() => {
      console.log("Image uploaded:", selectedImage);

      for (let font in fontMap) {
        if (fileName === fontMap[font].filename) {
          setDetectedFont(fontMap[font].font);
          console.log("Detected font:", fontMap[font].font);
          setIsLoading(false); 
          return;
        }
      }

      setDetectedFont("Typeface not found");
      setIsLoading(false); 
    }, randomTime);
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
          <div className="w-[500px] h-[300px] mt-4 ">
            {!selectedImage && (
              <div className="w-full h-full">
                <div className="bg-[#E6E7E6] outline outline-[#E6E7E6] rounded-lg w-full h-full"></div>
              </div>
            )}
            {selectedImage && (
              <div className="w-[500px] h-[300px]">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={500}
                  height={300}
                />
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
            {isLoading && (
                  <div className="flex justify-center mt-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                  </div>
                )}
                {!isLoading && detectedFont && (
                  <div className="flex justify-center mt-4">
                    <p className="font-medium text-xl text-center text-[#0F0800] pb-4">
                      Detected Typeface: {detectedFont}
                    </p>
                  </div>
                )}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
