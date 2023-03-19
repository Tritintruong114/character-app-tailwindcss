import React from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";

const MainSecond = ({}, ref) => {
  return (
    <div className="w-full h-fit bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100" ref={ref}>
      <Avatar />
    </div>
  );
};

export default forwardRef(MainSecond);
