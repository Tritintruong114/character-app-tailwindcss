import React, { useRef } from "react";
import Header from "./Header";
import HelloComponents from "./HelloComponents";
// import AnimatedMouse from "./AnimatedMouse";
// import background from "../assets/backgroundIMG/background.png";

function MainContainer() {
  const ref = useRef(null);
  const handleClick = () => {};
  return (
    <div className="bg-gradient-to-br h-screen relative from-red-200 via-red-200 to-rose-300 items-center justify-center flex ">
      <div className="absolute bottom-9 hover:scale-125 transition ease-in-out">
        <button
          onClick={handleClick}
          className="text-gray-200 bg-rose-300 md:bg-rose-400 animate-bounce xl:bg-rose-500  w-fit px-3 rounded cursor-pointer"
        >
          Let's Start
        </button>
      </div>
      <div className="absolute right-1/2  w-60 h-72 bg-purple-300 animation-delay-2000 mix-blend-multiply filter blur-xl  opacity-90 rounded-full animate-blob"></div>
      <div className="absolute left-2/4 animate-blob w-60 h-60  bg-yellow-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full"></div>
      <div className="absolute bottom-3/4 animation-delay-4000 animate-blob  w-60 h-72 bg-orange-300 mix-blend-multiply filter blur-xl opacity-90 rounded-full"></div>
      <HelloComponents />
      <Header />
    </div>
  );
}

export default MainContainer;
