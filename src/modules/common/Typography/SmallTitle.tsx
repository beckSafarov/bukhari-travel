import React from 'react'
import { SecondaryTitleProps } from '@/interfaces'

const SmallTitle = ({children}:SecondaryTitleProps) => {
  return (
    <h3 className="font-serif font-bold">{children}</h3>
  )
}

export default SmallTitle