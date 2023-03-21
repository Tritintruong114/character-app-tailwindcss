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
const PartList = (pathOfAssets) => {
  // const [renderBodys, setRenderBodys] = useState(false);
  // const [renderEarrings, setRenderEarrings] = useState(false);
  // const [renderEyebrows, setRenderEyebrows] = useState(false);
  // const [renderEyes, setRenderEyes] = useState(false);
  // const [renderFacial_Hairs, setRenderFacial_Hairs] = useState(false);
  // const [renderGlasses, setRenderGlasses] = useState(false);
  // const [renderHairs, setRenderHairs] = useState(false);
  // const [renderHats, setRenderHats] = useState(false);
  // const [renderLayer_1, setRenderLayer_1] = useState(false);
  // const [renderLayer_2, setRenderLayer_2] = useState(false);
  // const [renderLayer_3, setRenderLayer_3] = useState(false);
  // const [renderMouths, setRenderMouths] = useState(false);
  // const [renderNeckwears, setRenderNeckwears] = useState(false);
  // const [renderNoses, setRenderNoses] = useState(false);

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
      name: "facial_hairs",
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
    console.log(i);
    setRenderArrays(i);
  };
  return (
    <div className="h-screen relative justify-center items-center pb-3   w-full flex flex-col">
      <div className=" h-fit absolute m-3 top-1 md:top-2 xl:top-3 flex flex-row bg-slate-500 overflow-x-scroll w-3/4 gap-3">
        {/* This one using method to render from the arrays of the buttons. */}
        {/* Total: 14buttons and it is a array */}
        {totalButtons.map((button) => (
          <button
            key={button.id}
            className="bg-yellow-400 capitalize rounded-md px-2 py-1"
            onClick={() => handleClick(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>

      {/* This using the main Container */}
      <div className="w-3/4 h-4/5 absolute bottom-8 m-3 justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 items-center flex">
        {renderArrays === "bodys" && (
          <PartContainer pathOfAssets={"body"} index={total.bodys} />
        )}
        {renderArrays === "earrings" && (
          <PartContainer pathOfAssets={"earrings"} index={total.earrings} />
        )}
        {renderArrays === "eyebrows" && (
          <PartContainer pathOfAssets={"eyebrows"} index={total.eyebrows} />
        )}
        {renderArrays === "eyes" && (
          <PartContainer pathOfAssets={"eyes"} index={total.eyes} />
        )}
        {renderArrays === "facial_hairs" && (
          <PartContainer
            pathOfAssets={"facial_hair"}
            index={total.facial_hairs}
          />
        )}
        {renderArrays === "glasses" && (
          <PartContainer pathOfAssets={"glasses"} index={total.glasses} />
        )}
        {renderArrays === "hairs" && (
          <PartContainer pathOfAssets={"hairs"} index={total.hairs} />
        )}
        {renderArrays === "basics" && (
          <PartContainer pathOfAssets={"layer_1"} index={total.layer1} />
        )}
        {renderArrays === "layers" && (
          <PartContainer pathOfAssets={"layer_2"} index={total.layer2} />
        )}
        {renderArrays === "wearings" && (
          <PartContainer pathOfAssets={"layer_3"} index={total.layer3} />
        )}
        {renderArrays === "mouths" && (
          <PartContainer pathOfAssets={"mouths"} index={total.mouths} />
        )}
        {renderArrays === "neckwear" && (
          <PartContainer pathOfAssets={"neckwear"} index={total.neckwear} />
        )}
        {renderArrays === "noses" && (
          <PartContainer pathOfAssets={"noses"} index={total.noses} />
        )}
        {renderArrays === "hats" && (
          <PartContainer pathOfAssets={"hats"} index={total.hats} />
        )}
      </div>
    </div>
  );
};

export default PartList;
