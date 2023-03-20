import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";
import PartList from "./PartList";
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

const MainSecond = ({}, ref) => {
  return (
    <div className="w-full h-fit justify-center sm:flex-col md:flex-row xl:flex-row items-center flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100">
      <div
        className="w-full md:w-3/5 xl:w-3/5 flex flex-col sm:flex-col md:flex-row xl:flex-row h-fit "
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
