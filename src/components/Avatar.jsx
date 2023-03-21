import React from "react";
// import PartList from "./PartList";
import PartOfAvatar from "./PartOfAvatar";
import PartContainer from "../common/PartContainer";
import ReactTypingEffect from "react-typing-effect";
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
    <div className="h-screen  md:w-full flex flex-col justify-center items-center relative xl:w-full">
      {/* This is the big container include to the 2 section below */}
      <h1 className="w-full flex justify-center items-center font-bold absolute text-2xl top-1">
        Avatar
      </h1>
      <div className="w-5/6 h-5/6  shadow-[0px_6px_6px_0px_rgba(0,2,30)]  relative bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-xl  md:w-3/5 flex-col xl:w-3/5 flex justify-around  items-center">
        {/* This is for the Avatar picture container */}
        <div className="absolute flex-col w-full h-5/6 top-6 p-3 flex justify-center items-center">
          <ReactTypingEffect
            eraseSpeed={25}
            eraseDelay={2000}
            speed={21}
            className="font-bold capitalize text-lg md:text-xl xl:text-xl absolute -top-5 text-cyan-100"
            text={["Be yourself!✌️"]}
          />

          {/* <p className="absolute -top-3 font-light">Make A Cool Avatar!</p> */}
          <div className="bg-gradient-to-r shadow-[6.0px_6.0px_3.0px_rgba(0,0,0,0.38)]  from-rose-100 to-teal-100 rounded-xl text-white w-10/12 h-full justify-center items-center flex">
            <PartOfAvatar />
          </div>
        </div>

        {/* This is for the div contain the 2 button below */}
        <div className="absolute bottom-3 w-full flex justify-around items-center">
          <button
            type="button"
            class="text-white shadow-[1.0px_6.0px_0.0px_rgba(0,0,0,0.38)] bg-gradient-to-r h-8 w-20 hover:scale-110 transition ease-in outline-none from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-600 font-medium rounded-lg text-sm text-center"
          >
            Customize
          </button>

          <button
            type="button"
            class="text-white shadow-[1.0px_6.0px_0.0px_rgba(0,0,0,0.38)]  bg-gradient-to-r h-8 w-20 hover:scale-110 transition ease-in outline-none from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-600 font-medium rounded-lg text-sm text-center"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
