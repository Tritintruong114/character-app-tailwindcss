import React from "react";
// import PartList from "./PartList";
import PartOfAvatar from "./PartOfAvatar";
import PartContainer from "../common/PartContainer";
//This is component for main Avatar
const Avatar = ({
  body,
  clothes1,
  clothes2,
  clothes3,
  eyebrows,
  eyes,
  facial_hair,
  hair,
  mouths,
  noses,
  earrings,
  glasses,
  hats,
  neckwear,
}) => {
  return (
    //   This is big container for the Avater Component
    <div className="h-screen md:w-full flex justify-center items-center xl:w-full">
      {/* This is the big container include to the 2 section below */}
      <div className="w-4/5 relative bg-slate-500 rounded-xl h-5/6 md:w-3/5 flex-col xl:w-3/5 flex justify-around   items-center">
        {/* This is for the Avatar picture container */}
        <div className="absolute w-full h-5/6 top-6 p-3 flex justify-center items-center">
          <div className="bg-gray-400 rounded-xl text-white w-10/12 h-full justify-center items-center flex">

            <PartOfAvatar/>
            
          </div>
        </div>

        {/* This is for the div contain the 2 button below */}
        <div className="absolute bottom-3 w-full flex justify-around items-center">
          <button className="bg-gray-400 p-3 w-20 sm:w-20 sm:text-xs md:text-md md:w-20 rounded-lg text-xs font-bold text-white">
            Customize
          </button>
          <button className="bg-gray-400 p-3 w-20 sm:w-20 sm:text-xs md:text-md md:w-20 rounded-lg text-xs font-bold text-white">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
