import React from 'react'

interface FullButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const FullButton = ({children, onClick}:FullButtonProps) => {
  return (
    <button className='bg-orange py-[10px] px-[30px] rounded-3xl text-white text-base max-w-fit hover:brightness-110 transition duration-400'>{children}</button>
  )
}

FullButton.defaultProps = {
  onClick: ()=>void(0)
}

export default FullButton