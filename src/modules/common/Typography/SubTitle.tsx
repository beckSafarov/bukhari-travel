import React from 'react'
import { SecondaryTitleProps } from '@/interfaces'


const SubTitle = ({ children, className }: SecondaryTitleProps) => {
  return <div className={`font-sans text-sm text-gray ${className}`}>{children}</div>
}

export default SubTitle