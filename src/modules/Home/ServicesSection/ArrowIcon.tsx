import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

type ArrowIconType = {
  onClick: (c: any) => void,
  dir: string
}

const ArrowIcon = ({onClick, dir}:ArrowIconType) => {
  return (
    <span
      onClick={onClick}
      className={`text-gray-arrow cursor-pointer hover:text-orange  ${
        dir === 'left' ? 'hover:translate-x-1' : 'hover:-translate-x-1'
      } transition duration-200`}
    >
      {dir === 'right' ? <HiArrowRight size='50'/> : <HiArrowLeft size='50'/>}
    </span>
  )
}

export default ArrowIcon