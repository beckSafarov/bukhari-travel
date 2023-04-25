import { ButtonProps } from '@/interfaces'
import React from 'react'

const FullButton = ({children, onClick, className}:ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange py-[10px] px-[30px] rounded-3xl text-white text-base max-w-fit hover:brightness-110 transition duration-400 ${className}`}
    >
      {children}
    </button>
  )
}

FullButton.defaultProps = {
  onClick: ()=>void(0),
  className: ''
}

export default FullButton