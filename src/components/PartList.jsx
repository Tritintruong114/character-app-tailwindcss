import React from "react";

//This component is a container to contain the part of every body array.
function PartList() {
  const totalButton = [
    {
      id: 0,
      names: [
        {
          id: 0,
          name: "earrings",
        },
        {
          id: 1,
          name: "glasses",
        },
        {
          id: 2,
          name: "hats",
        },
        {
          id: 3,
          name: "neckwear",
        },
      ],
    },
    {
      id: 1,
      name: "body",
    },
    {
      id: 2,
      name: "eyebrows",
    },
    {
      id: 3,
      name: "eyes",
    },
    {
      id: 4,
      name: "facial_hair",
    },
    {
      id: 5,
      name: "hair",
    },
    {
      id: 6,
      name: "mouths",
    },
    {
      id: 1,
      name: "noses",
    },
  ];
  return (
    <div className="h-screen relative justify-center items-center w-full flex flex-col  bg-rose-600">
      <div className="bg-rose-300 absolute top-6 md:top-9 xl:top-9 flex flex-row overflow-x-scroll w-3/4 gap-3">
        <button className="bg-yellow-400 rounded-md px-2 py-1">ABC</button>
      </div>

      <div className="w-3/4 h-4/5 absolute bottom-6 justify-center items-center bg-stone-500 flex">
        This is the List
      </div>
    </div>
  );
}

export default PartList;
