import React from 'react'
import { IconProps } from './interfaces'

const ArrowRight = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width || '64'}
      height={height || '36'}
      viewBox='0 0 64 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{cursor: 'pointer'}}
    >
      <line
        x1='-8.74228e-08'
        y1='18'
        x2='61'
        y2='18'
        stroke={stroke || 'black'}
        stroke-width='2'
      ></line>
      <path
        d='M45.25 34.8875L62.5 18L45.25 1.1125'
        stroke={stroke || 'black'}
        stroke-width='2'
      ></path>
    </svg>
  )
}

export default ArrowRight