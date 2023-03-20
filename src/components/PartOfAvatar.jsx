import React from "react";
// import { body } from "../assets/body";
// This component is stacking to the Avatar Component for render UI
// This is the main of the APP
function PartOfAvatar({ path, index, zIndex }) {
  return (
    <div className="relative flex justify-center items-center h-full  w-full">
      <img src="assets/body/3.png" zIndex={0} className="absolute" alt=""></img>
      <img src="assets/hair/3.png" zIndex={1} className="absolute" alt=""></img>
    </div>
  );
}

export default PartOfAvatar;
