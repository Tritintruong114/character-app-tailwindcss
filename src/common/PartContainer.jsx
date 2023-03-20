import React from 'react'

const PartContainer = ({ pathOfAssets,index }) => {
  let arrayOfParts = [];
  for (let i = 0; i < index; i++){
    arrayOfParts.push(
    <img key={pathOfAssets+1} src={`/assets/${pathOfAssets}/${i + 1}.png`}alt=""></img>
 )
  }
  return (
     <div className="h-full w-full grid grid-cols-2 overflow-x-scroll items-center justify-center absolute ">
       {arrayOfParts}
     </div>
  )
}

export default PartContainer