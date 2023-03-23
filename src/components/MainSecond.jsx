import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";
import PartList from "./PartList";

const MainSecond = ({}, ref) => {
  const [bodys, setBodys] = useState({ value: "body", index: 0 });
  const [earrings, setEarrings] = useState({ value: "earrings", index: 0 });
  const [eyesbrows, setEyesbrows] = useState({ value: "eyebrows", index: 0 });
  const [eyes, setEyes] = useState({ value: "eyes", index: 0 });
  const [facial_hairs, setFacial_hairs] = useState({
    value: "facial_hairs",
    index: 0,
  });
  const [glasses, setglasses] = useState({ value: "glasses", index: 0 });
  const [hairs, setHairs] = useState({ value: "hairs", index: 0 });
  const [hats, setHats] = useState({ value: "hats", index: 0 });
  const [layer1, setLayer1] = useState({ value: "layer1", index: 0 });
  const [layer2, setlayer2] = useState({ value: "layer2", index: 0 });
  const [layer3, setlayer3] = useState({ value: "layer3", index: 0 });
  const [mouths, setMouths] = useState({ value: "mouths", index: 0 });
  const [noses, setNoses] = useState({ value: "noses", index: 0 });
  const [neckwears, setNeckwears] = useState({ value: "neckwear", index: 0 });
  // const [index, setIndex] = useState();
  //
  // this is take the path and number index sucesss
  const handleCustomize = () => {
    console.log("THIS IS CUSTOMIZE BUTTON");
  };

  const handleRestart = () => {
    console.log("THIS IS restart BUTTON");
  };

  const handleClickSetAvatar = (i, value) => {
    if (value === "neckwear") setNeckwears((e) => ({ ...e, index: i + 1 }));
    if (value === "mouths") setMouths((e) => ({ ...e, index: i + 1 })); //(mouths.index = i + 1)
    // batching  /// shallow compared  /// type reference // type value  M2.2 React Router , Redux , Database , RestFul API // SPA // redux router
  };

  return (
    <div className="w-full h-fit justify-center sm:flex-col md:flex-row xl:flex-row items-center flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100">
      <div
        className="w-full md:w-4/5 xl:w-4/5 flex flex-col sm:flex-col md:flex-row xl:flex-row h-fit "
        ref={ref}
      >
        <Avatar
          handleCustomize={handleCustomize}
          handleRestart={handleRestart}
          bodys={bodys}
          earrings={earrings}
          eyebrows={eyesbrows}
          eyes={eyes}
          hats={hats}
          hairs={hairs}
          layer1={layer1}
          layer2={layer2}
          layer3={layer3}
          noses={noses}
          mouths={mouths}
          facial_hairs={facial_hairs}
          neckwears={neckwears} ///  === {value "neckwears",index = 2}
          glasses={glasses}
          // index={index}

          // {  <part folders={neckwears.value} index={neckwears.index} >}
        />
      </div>

      <div className="w-full h-fit md:w-2/4 xl:w-2/4">
        <PartList handleClickSetAvatar={handleClickSetAvatar} />
      </div>
    </div>
  );
};

export default forwardRef(MainSecond);
