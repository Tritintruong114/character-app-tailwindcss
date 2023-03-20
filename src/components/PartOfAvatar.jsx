import React from "react";
// import { body } from "../assets/body";
// This component is stacking to the Avatar Component for render UI
// This is the main of the APP
function PartOfAvatar({ path, index, zIndex }) {
  return (
    <div>
      <img style={zIndex} src="assets/body/1.png" alt=""></img>
    </div>
  );
}

export default PartOfAvatar;
