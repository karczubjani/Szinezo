import React from "react";

function Buttons({setColor}) {

  const handleColor = (color) => {
    setColor(color)
  }

  return (
    <div className="buttons-div">
        <button className="blue" onClick={()=> handleColor('blue')}>Blue</button>
        <button className="green" onClick={()=> handleColor('green')}>Green</button>
        <button className="red" onClick={()=> handleColor('red')}>Red</button>
        <button className="orange" onClick={()=> handleColor('orange')}>Orange</button>
        <button className="purple" onClick={()=> handleColor('purple')}>Purple</button>
    </div>
  );
}

export default Buttons;