import React, { useEffect, useState } from "react";
// import {motion} fro
function HelloComponents() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (position) => {
      // console.log(position);
      setMousePosition({
        x: position.clientX,
        y: position.clientY,

        // this print out the mouse corrodie
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  console.log(mousePosition);
  return (
    <div className="absolute flex items-center">
      <h1 className="text-3xl md:text-6xl xl:text-7xl">Hello World!</h1>
      <motion.div className="bg-black rounded-full h-3 w-3 md:h-9 md:w-9 xl:h-11 xl:w-11 fixed top-0 left-0"></motion.div>
    </div>
  );
}

export default HelloComponents;
