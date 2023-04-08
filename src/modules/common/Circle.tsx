import React from 'react'

interface CircleFace {
  size: string,
  className: string,
}

const Circle = ({size, className}:CircleFace) => {
  return (
    <div
      className={`rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      {''}
    </div>
  )
}

export default Circle