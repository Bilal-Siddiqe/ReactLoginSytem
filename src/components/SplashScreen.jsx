import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [display, setDisplay] = useState("block");

  const loader = {
    display,
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplay("none");
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  function clk() {
    setNum(num + 1);
  }

  function clk2() {
    setNum2(num2 + 1);
  }

  return (
    <div>
      <center>
        <h1>{num}</h1>
        <button onClick={clk}>Click me </button>
        <br />
        <br />

        <h1>{num2}</h1>
        <button onClick={clk2}>Click me </button>
      </center>
      <br />
      <br />

      <div className="box p-5" style={loader}></div>
    </div>
  );
}
