import React from 'react'

const PartContainer = ({ pathOfAssets }) => {
  
  
  return (
     <div className="w-3/4 h-4/5 absolute bottom-6 justify-center items-center bg-stone-500 flex">
     {/* This one much be using render base on handlCLick to the Buttons */}
     <div>
       <img src={`/assets/${pathOfAssets}/3.png`}alt=""></img>
     </div>
     
   </div>
  )
}

export default PartContainer