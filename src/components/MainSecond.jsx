import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";
import PartList from "./PartList";

const MainSecond = ({ index }, ref) => {
  const [bodys, setBodys] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [eyesbrows, setEyesbrows] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [facial_hairs, setFacial_hairs] = useState(0);
  const [glasses, setglasses] = useState(0);
  const [hairs, setHairs] = useState(0);
  const [hats, setHats] = useState(0);
  const [layer1, setLayer1] = useState(0);
  const [layer2, setlayer2] = useState(0);
  const [layer3, setlayer3] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [noses, setNoses] = useState(0);
  const [neckwears, setNeckwears] = useState(0);
  return (
    <div className="w-full h-fit justify-center sm:flex-col md:flex-row xl:flex-row items-center flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100">
      <div
        className="w-full md:w-4/5 xl:w-4/5 flex flex-col sm:flex-col md:flex-row xl:flex-row h-fit "
        ref={ref}
      >
        <Avatar
          bodys={bodys}
          earrings={earrings}
          eyes={eyes}
          eyesbrows={eyesbrows}
          hats={hats}
          hairs={hairs}
          glasses={glasses}
          facial_hair={facial_hairs}
          layer1={layer1}
          layer2={layer2}
          layer3={layer3}
          mouths={mouths}
          neckwears={neckwears}
          noses={noses}
        />
      </div>

      <div className="w-full h-fit md:w-2/4 xl:w-2/4">
        <PartList />
      </div>
    </div>
  );
};

export default forwardRef(MainSecond);
