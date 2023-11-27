import React from "react";
import FontBox from "@/components/FontBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { GrFilter } from "react-icons/gr";

const IndexPage = () => {
  const [fonts, setFonts] = React.useState([
    { name: "Adobe Jenson Pro", language: ["english"], type: "serif" },
    { name: "Alice", language: ["english"], type: "serif" },
    { name: "Droog", language: ["english"], type: "sans-serif" },
    { name: "Galvji", language: ["english"], type: "serif" },
    {
      name: "HanziPen TC",
      language: ["chinese", "english"],
      type: "sans-serif",
    },
    { name: "Highway Gothic", language: ["english"], type: "sans-serif" },
    { name: "Karla", language: ["english"], type: "sans-serif" },
    {
      name: "Lantinghei SC",
      language: ["chinese", "english"],
      type: "sans-serif",
    },
    {
      name: "LingWai TC",
      language: ["chinese", "english"],
      type: "sans-serif",
    },
    { name: "Miller Display", language: ["english"], type: "serif" },
    { name: "Playfair Display", language: ["english"], type: "serif" },
    { name: "Proxima Nova", language: ["english"], type: "sans-serif" },
    { name: "Rajdhani", language: ["english"], type: "sans-serif" },
    { name: "San Francisco", language: ["english"], type: "sans-serif" },
    { name: "TAN Pearl", language: ["english"], type: "serif" },
    { name: "Wawati SC", language: ["chinese", "english"], type: "sans-serif" },
    { name: "蘋方-繁", language: ["chinese", "english"], type: "sans-serif" },
  ]);

  const [searchFonts, setSearchFonts] = React.useState(fonts);
  const [filters, setFilters] = React.useState({
    language: "",
    type: "",
  });

  const removeSpace = (str) => {
    return str.replace(/\s+/g, "");
  };

  const onSearchChange = (event) => {
    let value = event.target.value.toLowerCase();
    let newFonts = fonts.filter((font) => {
      const nameMatch = font.name.toLowerCase().includes(value);
      const languageMatch = filters.language
        ? font.language.includes(filters.language) ||
          font.language === filters.language
        : true;
      const typeMatch = filters.type ? font.type === filters.type : true;

      return nameMatch && languageMatch && typeMatch;
    });

    setSearchFonts(newFonts);
  };

  const handleFilterChange = (e, filterType) => {
    const newFilters = { ...filters, [filterType]: e.target.value };
    setFilters(newFilters);

    let filteredFonts = fonts.filter((font) => {
      const languageMatch = newFilters.language
        ? font.language.includes(newFilters.language) ||
          font.language === newFilters.language
        : true;
      const typeMatch = newFilters.type ? font.type === newFilters.type : true;

      return languageMatch && typeMatch;
    });

    setSearchFonts(filteredFonts);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={onSearchChange}
          className="font-Karla font-regular w-[95%] flex justify-left m-10 mt-20 p-1 pl-4 outline outline-[#E6E7E6] rounded-full outline-2 text-xl text-[#0F0800]"
        />
      </div>
      <div className="m-10 p-1 pl-4">
        <GrFilter />
        <select onChange={(e) => handleFilterChange(e, "language")}>
          <option value="">All Languages</option>
          <option value="english">English</option>
          <option value="chinese">Chinese</option>
        </select>
        <select onChange={(e) => handleFilterChange(e, "type")}>
          <option value="">All Types</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans_serif</option>
        </select>
      </div>
      <div className="font-Karla font-regular m-10 grid grid-cols-3 gap-4">
        {searchFonts.map((font) => (
          <div
            key={font.name}
            className="outline outline-[#E6E7E6] bg-[#FFFFFF] rounded-lg outline-2 hover:outline-[#265479] hover:shadow-lg "
          >
            <Link href={"/" + removeSpace(font.name.toLowerCase())}>
              <Image
                src={"/" + font.name.toLowerCase() + ".png"}
                alt="Picture of the typeface"
                width={500}
                height={500}
              />
            </Link>
            <FontBox name={font.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
