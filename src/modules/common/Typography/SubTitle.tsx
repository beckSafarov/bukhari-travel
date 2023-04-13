import React from 'react'
import { SecondaryTitleTypes } from './types'


const SubTitle = ({ children, className }: SecondaryTitleTypes) => {
  return <div className={`font-sans text-sm text-gray ${className}`}>{children}</div>
}

export default SubTitle