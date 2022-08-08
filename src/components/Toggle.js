import React, {useState} from "react"; //import


function Toggle() {
  const [isOn, setIsOn] = useState(false) //Initialize 

  function handleClick(){
    setIsOn(isOn => !isOn)
  }
  const color = isOn? "red" : "white";

  return <button style={{background: color}}onClick={handleClick}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
