import React from 'react'
import { IconProps } from './interfaces'

const ArrowLeft = ({width, height, stroke}:IconProps) => {
  return (
    <svg
      width={width || '48'}
      height={height || '32'}
      viewBox='0 0 48 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: 'pointer' }}
    >
      <path
        d='M47.5 16L3.5 16'
        stroke={stroke || 'black'}
        stroke-width='2'
      ></path>
      <path
        d='M17.25 1.11246L2 16L17.25 30.8875'
        stroke={stroke || 'black'}
        stroke-width='2'
      ></path>
    </svg>
  )
}

export default ArrowLeft