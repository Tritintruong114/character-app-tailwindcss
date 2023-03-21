import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";
import PartList from "./PartList";

const MainSecond = ({}, ref) => {
  return (
    <div className="w-full h-fit justify-center sm:flex-col md:flex-row xl:flex-row items-center flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100">
      <div
        className="w-full md:w-4/5 xl:w-4/5 flex flex-col sm:flex-col md:flex-row xl:flex-row h-fit "
        ref={ref}
      >
        <Avatar />
      </div>

      <div className="w-full h-fit md:w-2/4 xl:w-2/4">
        <PartList />
      </div>
    </div>
  );
};

export default forwardRef(MainSecond);
