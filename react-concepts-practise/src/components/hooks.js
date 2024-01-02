import React, { useState, useEffect, useRef } from "react";

/**
 * useMemo, useCallback and useRef
 * Ref: https://w3collective.com/react-stopwatch/
 * Build a timer app
 * @returns
 */

const Hooks = () => {
  const [j, setJ] = useState(100);
  const [running, setRunning] = useState(false);
  let i = 0;

  const handleStartTimer = () => {
   setRunning(true);
  }

  const handleStopTimer = () => {
    setRunning(false);
  }

  useEffect(() => {
    let interval;
    if(running) {
        interval = setInterval(() => setJ(prevState => prevState - 1), 1000);
    } else if(!running){
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running])


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hooks</h1>
      <div className="m-3 p-2">
        <button
          onClick={() => {
            i = i + 1;
            console.log(i);
          }}
        >
          Increase i
        </button>
        <span>{i}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setJ(j - 1);
          }}
        >
          Increase J
        </button>
      </div>

      <span>Counter : {j}</span>

      <div>
        <button
          className="p-2"
          onClick={handleStopTimer}
        >
          Stop Timer
        </button>

        <button
          className="p-2"
          onClick={handleStartTimer}
        >
          Start Timer
        </button>
      </div>
    </>
  );
};

export default Hooks;
