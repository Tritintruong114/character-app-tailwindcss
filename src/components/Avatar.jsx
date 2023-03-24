import React from "react";
// import PartList from "./PartList";
import PartOfAvatar from "./PartOfAvatar";
import PartContainer from "../common/PartContainer";
import ReactTypingEffect from "react-typing-effect";
//This is component for main Avatar
const Avatar = ({
  // pathOfAssets,
  handleCustomize,
  handleRestart,
  index, //// ==== 6
  bodys,
  earrings,
  eyebrows,
  eyes,
  facial_hairs,
  glasses,
  hairs,
  hats,
  layer1,
  layer2,
  layer3,
  mouths,
  noses,
  neckwears, ///  === {value "neckwears",index = 2}
}) => {
  return (
    //   This is big container for the Avater Component
    <div className="h-screen  md:w-full flex flex-col justify-center items-center relative xl:w-full">
      {/* This is the big container include to the 2 section below */}
      <h1 className="w-full flex justify-center font-light   items-center font-bold absolute text-2xl top-1">
        Avatar
      </h1>
      <div className="w-5/6 h-5/6  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  relative bg-gradient-to-bl from-red-200 via-red-300 to-yellow-200 rounded-xl  md:w-3/5 flex-col xl:w-3/5 flex justify-around  items-center">
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
          <div className="bg-gradient-to-bl  shadow-[6.0px_6.0px_3.0px_rgba(0,0,0,0.38)]  from-rose-100 to-teal-100 rounded-xl text-white w-10/12 h-full justify-center items-center flex">
            <PartOfAvatar
              index={bodys.index}
              path={bodys.value}
              className="z-0"
            />
            <PartOfAvatar
              index={earrings.index}
              path={earrings.value}
              className="z-30"
            />
            <PartOfAvatar
              index={eyebrows.index}
              path={eyebrows.value}
              className="z-10"
            />
            <PartOfAvatar
              index={eyes.index}
              path={eyes.value}
              className="z-10"
            />
            <PartOfAvatar
              index={facial_hairs.index}
              path={facial_hairs.value}
              className="z-10"
            />
            <PartOfAvatar
              index={glasses.index}
              path={glasses.value}
              className="z-10"
            />
            <PartOfAvatar index={index} path={hairs.value} className="z-20" />
            <PartOfAvatar
              index={hats.index}
              path={hats.value}
              className="z-30"
            />
            <PartOfAvatar
              index={layer1.index}
              path={layer1.value}
              className="z-10"
            />
            <PartOfAvatar
              index={layer2.index}
              path={layer2.value}
              className="z-10"
            />
            <PartOfAvatar
              index={layer3.index}
              path={layer3.value}
              className="z-10"
            />
            <PartOfAvatar
              index={mouths.index}
              path={mouths.value}
              className="z-10"
            />
            <PartOfAvatar
              index={noses.index}
              path={noses.value}
              className="z-30"
            />
            <PartOfAvatar
              index={neckwears.index}
              path={neckwears.value}
              className="z-50"
            />
          </div>
        </div>

        {/* This is for the div contain the 2 button below */}
        <div className="absolute bottom-3 md:bottom-6 xl:bottom-6 w-full flex justify-around items-center">
          <button
            onClick={handleCustomize}
            // type="button"
            className="flex items-center justify-center text-white bg-transparent border-4 border-gray-100 h-8 w-20 hover:scale-110 transition ease-in outline-none  font-bold  rounded-full text-sm "
          >
            Customize
          </button>

          <button
            onClick={handleRestart}
            // type="button"
            className="flex items-center justify-center text-white bg-transparent border-4 border-gray-100 h-8 w-20 hover:scale-110 transition ease-in outline-none  font-bold  rounded-full text-sm "
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
