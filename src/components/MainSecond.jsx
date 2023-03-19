import React from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";

const MainSecond = ({}, ref) => {
  return (
    <div className="w-full h-fit" ref={ref}>
      <Avatar />
    </div>
  );
};

export default forwardRef(MainSecond);
