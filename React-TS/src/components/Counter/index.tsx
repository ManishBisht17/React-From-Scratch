import React, { useState, useEffect } from "react";
import "./style.css";
const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState(0);

  console.log("new val =", counter);
  useEffect(() => {
    console.log("Counter Mounted");
    return function () {
      console.log("Unmounted Counter ");
    };
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };
  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <button style={{ background: "lightgreen" }} onClick={handleIncrement}>
        +1
      </button>
      <button style={{ background: "tomato" }} onClick={handleDecrement}>
        -1
      </button>
    </div>
  );
};
export default Counter;
