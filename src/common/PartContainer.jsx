import React from "react";

const PartContainer = ({ handleClickSetAvatar, pathOfAssets, index }) => {
  let arrayOfParts = [];
  for (let i = 0; i < index; i++) {
    arrayOfParts.push(
      <img
        onClick={() => handleClickSetAvatar(i)}
        key={pathOfAssets + 1}
        src={`/assets/${pathOfAssets}/${i + 1}.png`}
        alt=""
        className="hover:scale-110 shadow-[1.0px_6.0px_3.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-500 bg-gradient-to-l from-red-200 via-red-300 to-yellow-200 rounded-xl w-fit flex h-fit justify-center items-center "
      ></img>
    );
  }
  return (
    <div className="h-5/6 rounded-xl  bottom-0 p-3 w-fit gap-3 grid grid-cols-2 justify-center items-center  overflow-x-scroll absolute ">
      {arrayOfParts}
    </div>
  );
};

export default PartContainer;
