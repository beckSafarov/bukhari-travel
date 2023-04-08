import React from 'react'
import { SecondaryTitleTypes } from './types'


const SubTitle = ({ children }: SecondaryTitleTypes) => {
  return <div className='font-sans text-sm text-gray'>{children}</div>
}

export default SubTitle