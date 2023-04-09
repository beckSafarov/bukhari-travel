import React from 'react'

interface CircleFace {
  size: string,
  className: string,
  children?: React.ReactNode
}

const Circle = ({size, className, children}:CircleFace) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {children || ''}
    </div>
  )
}

export default Circle