import React, { useState, useEffect, useRef } from "react";

/**
 * useMemo, useCallback and useRef
 *
 * Build a timer app
 * @returns
 */

const Hooks = () => {
  const [j, setJ] = useState(100);
  let i = 0;
  const intervalRef = useRef(0);

//   useEffect(() => {
//     setInterval(() => setJ(j+1), 1000);

//   }, []);

  console.log("Rendering...", intervalRef.current);
  return (
    <>
      <div>Hooks</div>
      <div>
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
            setJ(j + 1);
          }}
        >
          Increase J
        </button>
        <span>{j}</span>
      </div>

      <div>
        <button
          onClick={() => {
            intervalRef.current = intervalRef.current + 1;
          }}
        >
          Increase Ref
        </button>
        <span>{intervalRef.current}</span>
      </div>
    </>
  );
};

export default Hooks;
