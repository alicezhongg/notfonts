import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["Playfair Display"]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        {fonts.map((font) => (
          <div key={font} className=" flex justify-center">
            <div className="pt-20 px-10">
              <Link href={{ pathname: "/playfairdisplaytypeface" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  Playfair Display
                </h1>
              </Link>
              <p className="pt-1 pb-6 text-[#0F0800]">
                Designed by Claus Eggers Sørensen
              </p>
              <p className="text-xl pb-3 text-[#0F0800]">
                Regular, Italic, Bold, Bold Italic, Black, Black Italic
              </p>
              <h1 className="text-3xl text-left text-[#265479] py-4">
                Where to find this typeface?
              </h1>
              <div className="flex justify-left space-x-10">
                <Link
                  href={{
                    pathname: "https://fonts.adobe.com/fonts/playfair",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Adobe Fonts
                  </p>
                </Link>
                <Link
                  href={{
                    pathname:
                      "https://fonts.google.com/specimen/Playfair+Display",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Google Fonts
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-3/5">
              <CarouselProvider
                className="w-full"
                naturalSlideWidth={100}
                naturalSlideHeight={72}
                totalSlides={6}
              >
                <Slider className="outline outline-[#E6E7E6] rounded-lg outline-2 ">
                  <Slide index={0}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_regular.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_italic.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_bold.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_bold_italic.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_black.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="container mx-auto">
                      <Image
                        className=""
                        src={"/playfair_display_black_italic.png"}
                        alt="Picture of the typeface"
                        fill={true}
                      />
                    </div>
                  </Slide>
                </Slider>
                <div className="flex justify-center space-x-5 py-2">
                  <ButtonBack className="text-lg text-center p-2 rounded-full text-[#265479] hover:outline outline-[#E6E7E6] outline-2 hover:shadow-md">
                    <IoIosArrowBack />
                  </ButtonBack>
                  <ButtonNext className="text-lg text-center p-2 rounded-full text-[#265479] hover:outline outline-[#E6E7E6] outline-2 hover:shadow-md">
                    <IoIosArrowForward />
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
