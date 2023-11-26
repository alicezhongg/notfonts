import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });

const IndexPage = () => {
  const [fonts, setFonts] = React.useState(["San Francisco"]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="pt-20">
        {fonts.map((font) => (
          <div key={font} className=" flex justify-center mx-20">
            <div className="pt-20 px-10">
              <Link href={{ pathname: "/sanfrancisco" }}>
                <h1 className="text-5xl text-left text-[#265479]">
                  San Francisco
                </h1>
              </Link>
              <p className="py-2 text-[#0F0800]">Designed by Apple</p>
              <p className="pb-6">
                Pro, Mono, Compact, New York, Arabic, Armenian, Georgian, Hebrew
              </p>
              <h1 className="text-3xl text-left text-[#265479] py-4">
                Where to find this typeface?
              </h1>
              <div className="flex justify-left space-x-10">
                <Link
                  href={{
                    pathname: "https://developer.apple.com/fonts/",
                  }}
                  target="_blank"
                >
                  <p className="text-xl text-center p-2 rounded-lg text-[#265479] outline outline-[#E6E7E6] outline-2 hover:outline-2 hover:outline-offset-2 hover:outline-[#265479] hover:shadow-lg">
                    Apple Developer
                  </p>
                </Link>
              </div>
            </div>
            {/* <Image
              className="outline outline-[#E6E7E6] rounded-lg outline-2"
              src={"/" + font.toLowerCase() + ".png"}
              alt="Picture of the typeface"
              width={1000}
              height={500}
            /> */}
            <div
              id="carouselExampleControls"
              class="relative"
              data-te-carousel-init
              data-te-ride="carousel"
            >
              {/* <!--Carousel items--> */}
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item--> */}
                <div
                  class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <Image
                    className="outline outline-[#E6E7E6] rounded-lg outline-2"
                    src={"/" + font.toLowerCase() + ".png"}
                    alt="Picture of the typeface"
                    width={1000}
                    height={500}
                  />
                </div>
                {/* <!--Second item--> */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <Image
                    className="outline outline-[#E6E7E6] rounded-lg outline-2"
                    src={"/sp mono.png"}
                    alt="Picture of the typeface"
                    width={1000}
                    height={500}
                  />
                </div>
                {/* <!--Third item--> */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <Image
                    className="outline outline-[#E6E7E6] rounded-lg outline-2"
                    src={"/" + font.toLowerCase() + ".png"}
                    alt="Picture of the typeface"
                    width={1000}
                    height={500}
                  />
                </div>
              </div>

              {/* <!--Carousel controls - prev item--> */}
              <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="prev"
              >
                <span class="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>
              {/* <!--Carousel controls - next item--> */}
              <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="next"
              >
                <span class="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
