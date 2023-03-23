import React from "react";
// import { body } from "../assets/body";
// This component is stacking to the Avatar Component for render UI
// This is the main of the APP
function PartOfAvatar({ path, index }) {
  return (
    <img
      src={`assets/${path}/${index + 1}.png`}
      // zIndex={zIndex}
      className="absolute h-5/6"
      alt=""
    ></img>
  );
}

export default PartOfAvatar;
