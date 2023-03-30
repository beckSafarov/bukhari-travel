import React from 'react'


interface SupTitleProps {
  children:React.ReactNode
}
const SupTitle = ({children}:SupTitleProps) => {
  return (
    <p className='text-orange text-4 font-sans font-semibold mb-2'>{children}</p>
  )
}

export default SupTitle