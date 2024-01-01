import React from 'react'

const TrafficCircle = ({bgColor}) => {
  return (
    <div className={`rounded-full w-20 h-20 m-1 bg-${bgColor}-600 text-white`}></div>
  )
}

export default TrafficCircle;