import React from 'react'
import { SecondaryTitleTypes } from './types'


const SupTitle = ({children}:SecondaryTitleTypes) => {
  return (
    <p className='text-orange text-4 font-sans font-semibold mb-2'>{children}</p>
  )
}

export default SupTitle