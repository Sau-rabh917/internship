import React from "react";

const Body = () => {
  const [number, setnumber] = React.useState(0);
  const add = () => setnumber(number + 1);
  
  const subtract = () =>setnumber(number - 1);


  return (
    <>
    <div className="w-full h-screen flex flex-col items-center gap-20">
        
        <button className="bg-blue-600 p-2 text-white rounded-lg " onClick={add}>
          Increase Number
        </button>
        <span className="text-4xl">{number}</span>
        <button className="bg-orange-800 p-2 text-white rounded-lg" onClick={subtract}>
          Decrease Number
        </button>
      </div>
      
        
      
    </>
  );
}; 

export default Body;
