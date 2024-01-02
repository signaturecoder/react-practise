import React from "react";

const TrafficCircle = ({ bgColor }) => {

  return (
    <>
      <div
        className="rounded-full w-20 h-20 m-1"
        style={{ backgroundColor: bgColor }}
      ></div>
    </>
  );
};

export default TrafficCircle;
