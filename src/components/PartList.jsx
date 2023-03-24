import React from "react";
import { useState } from "react";
import PartContainer from "./../common/PartContainer";
const total = {
  earrings: 32,
  bodys: 17,
  eyes: 17,
  hairs: 73,
  mouths: 24,
  facial_hairs: 17,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  layer1: 5,
  layer2: 5,
  layer3: 9,
  noses: 1,
  neckwear: 18,
};

//This component is a container to contain the part of every body array.
const PartList = ({ handleClickSetAvatar }) => {
  const [renderArrays, setRenderArrays] = useState("");
  ///This contant for rendering the all buttons of the list

  const totalButtons = [
    //This is a arrays of Object. In a object having 2 key, one is id nad name.
    {
      id: 0,
      name: "earrings",
    },
    {
      id: 1,
      name: "glasses",
    },
    {
      id: 2,
      name: "hats",
    },
    {
      id: 4,
      name: "neckwear",
    },
    {
      id: 5,
      name: "bodys",
    },
    {
      id: 6,
      name: "eyebrows",
    },
    {
      id: 7,
      name: "eyes",
    },
    {
      id: 8,
      name: "Beards",
    },
    {
      id: 9,
      name: "hairs",
    },
    {
      id: 10,
      name: "mouths",
    },
    {
      id: 11,
      name: "noses",
    },

    {
      id: 12,
      name: "basics",
    },
    {
      id: 13,
      name: "layers",
    },
    {
      id: 14,
      name: "wearings",
    },
  ];

  // this button work very well.
  const handleClick = (i) => {
    console.log(i[0]);
    setRenderArrays(i[0]);
  };
  return (
    <div className="h-screen relative justify-center items-center pb-3  w-full flex flex-col">
      {/* This using the main Container */}
      <h1 className="w-full font- flex justify-center items-center font-light  absolute text-2xl top-1">
        Character
      </h1>
      <div className="w-3/4 h-5/6 absolute bottom-8 m-3 shadow-[0px_6px_6px_0px_rgba(0,2,30)] justify-center bg-gradient-to-bl   from-rose-100 to-teal-100 rounded-xl  items-center flex">
        <div className=" absolute m-1 py-3 pl-3 scroll-smooth hover:scroll-auto top-1 md:top-2 xl:top-3 flex flex-row overflow-x-scroll w-full gap-3">
          {/* This one using method to render from the arrays of the buttons. */}
          {/* Total: 14buttons and it is a array */}
          {totalButtons.map((button) => (
            <button
              key={button.id}
              className=" px-3 py-1 text-xs font-light bg-gradient-to-br shadow-[1.0px_6.0px_0.0px_rgba(0,0,0,0.38)] from-purple-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 text-white focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-600 hover:scale-110 transition ease-in-out capitalize rounded-full"
              onClick={() => handleClick([button.name])}
            >
              {button.name}
            </button>
          ))}
        </div>
        {renderArrays === "bodys" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"body"}
            index={total.bodys}
          />
        )}
        {renderArrays === "earrings" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"earrings"}
            index={total.earrings}
          />
        )}
        {renderArrays === "eyebrows" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"eyebrows"}
            index={total.eyebrows}
          />
        )}
        {renderArrays === "eyes" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"eyes"}
            index={total.eyes}
          />
        )}
        {renderArrays === "Beards" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"facial_hair"}
            index={total.facial_hairs}
          />
        )}
        {renderArrays === "glasses" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"glasses"}
            index={total.glasses}
          />
        )}
        {renderArrays === "hairs" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"hairs"}
            index={total.hairs}
          />
        )}
        {renderArrays === "basics" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"layer_1"}
            index={total.layer1}
          />
        )}
        {renderArrays === "layers" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"layer_2"}
            index={total.layer2}
          />
        )}
        {renderArrays === "wearings" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"layer_3"}
            index={total.layer3}
          />
        )}
        {renderArrays === "mouths" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"mouths"}
            index={total.mouths}
          />
        )}
        {renderArrays === "neckwear" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"neckwear"}
            index={total.neckwear}
          />
        )}
        {renderArrays === "noses" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"noses"}
            index={total.noses}
          />
        )}
        {renderArrays === "hats" && (
          <PartContainer
            handleClickSetAvatar={handleClickSetAvatar}
            pathOfAssets={"hats"}
            index={total.hats}
          />
        )}
      </div>
    </div>
    // </div>
  );
};

export default PartList;
