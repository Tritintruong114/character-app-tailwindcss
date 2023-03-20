import React from "react";
import { useState } from "react";
import PartContainer from './../common/PartContainer';
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

//This component is a container to contain the part of every body array.
const PartList= (pathOfAssets) => {
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
      name: "body",
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
      name: "facial_hair",
    },
    {
      id: 9,
      name: "hair",
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
      name: "layer1",
    },
    {
      id: 13,
      name: "layer2",
    },
    {
      id: 14,
      name: "layer3",
    },
  ];
  // this button work very well.
  const handleClick = () => {
    
  };
  return (
    <div className="h-screen relative justify-center items-center w-full flex flex-col  bg-rose-600">
      <div className="bg-rose-300 absolute top-6 md:top-9 xl:top-9 flex flex-row overflow-x-scroll w-3/4 gap-3">
        {/* This one using method to render from the arrays of the buttons. */}
        {/* Total: 14buttons and it is a array */}
        {totalButtons.map((button) => (
          <button
            key={button.id}
            className="bg-yellow-400 capitalize rounded-md px-2 py-1"
            onClick={handleClick}
          >
            {button.name}
          </button>
        ))}
      </div>

      {/* This using the main Container */}
      <div className="w-3/4 h-4/5 absolute bottom-6 justify-center items-center bg-stone-500 flex">
        
        {/* This one much be using render base on handlCLick to the Buttons */}

    
        <PartContainer pathOfAssets={"layer_2"} />
        <PartContainer pathOfAssets={"layer_3"} />
        

      </div>
    </div>
  );
}

export default PartList;
