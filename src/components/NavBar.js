import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-left space-x-2 text-[#0f0800] text-lg">
      <div className="w-1/8 text-center">
        <p className="p-2 rounded-md">NotFonts</p>
      </div>
      <div className="w-1/8 text-center">
        <p className="p-2 rounded-md">Browse</p>
      </div>
      <div className="w-1/8 text-center">
        <p className="p-2 rounded-md">Detect</p>
      </div>
      <div className="w-1/8 text-center">
        <p className="p-2 rounded-md">Search</p>
      </div>
    </div>
  );
};

export default NavBar;