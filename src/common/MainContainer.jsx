import React from "react";
import Header from "./Header";
import HelloComponents from "./HelloComponents";
// import AnimatedMouse from "./AnimatedMouse";
// import background from "../assets/backgroundIMG/background.png";

function MainContainer() {
  return (
    <div className="bg-gradient-to-br h-screen relative from-red-200 via-red-200 to-rose-300 items-center justify-center flex ">
      <div className="absolute right-1/2  w-60 h-72 bg-purple-300 animation-delay-2000 mix-blend-multiply filter blur-xl  opacity-90 rounded-full animate-blob"></div>
      <div className="absolute left-2/4 animate-blob w-60 h-60  bg-yellow-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full"></div>
      <div className="absolute bottom-3/4 animation-delay-4000 animate-blob  w-60 h-72 bg-orange-300 mix-blend-multiply filter blur-xl opacity-90 rounded-full"></div>
      <HelloComponents />
      <Header />
      <div className="absolute bottom-9">
        <button className="text-white">Let's Start</button>
      </div>
    </div>
  );
}

export default MainContainer;
