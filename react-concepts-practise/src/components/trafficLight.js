import React, { useEffect, useState } from "react";
import TrafficCircle from "./trafficCircle";

/**
 * 📌 Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms

Key take away from solving this problem,
📌 As we have no dependency array in the UseEffect, the useEffect will be triggered on every re-render.
📌 Whenever setTimeOut is trigered we are setting the state, setting of state re-renders the component and as a result the useEffect is rendered again.
📌 On every execution of useEffect the previous timer is cleared.

 *  As per the timer, you need to update the color
 */

const TrafficLight = () => {
  const traficLightData = [
    { time: 4000, color: "red" },
    { time: 500, color: "yellow" },
    { time: 3000, color: "green" },
  ];
  const [index, setIndex] = useState(0);

  const renderCircle = traficLightData.map((circle, idx) => (
    <TrafficCircle
      key={idx}
      bgColor={index === idx ? traficLightData[index].color : "grey"}
    />
  ));
  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((old) => (old + 1) % 3);
    }, traficLightData[index].time);

    return () => clearInterval(interval);

  });

  console.log("index ", index);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-64 w-24 bg-black mt-24">
        {renderCircle}
      </div>
    </>
  );
};

export default TrafficLight;
