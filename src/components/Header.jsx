import React from "react";

function Header() {
  return (
    <div>
      <div>
        <h3 className="text-gray-600 font-light text-xs sm:text-lg flex flex-row items-center justify-center">
          Made by
          <p className="font-bold px-1 text-xs sm:text-lg hover:hidden">
            Bruno Truong
          </p>
        </h3>
      </div>

      <div className="grid grid-cols-1">
        <h1 className="text-rose-600 font-light text-lg sm:text-2xl ">
          Avatar Creator
        </h1>
      </div>
    </div>
  );
}

export default Header;
