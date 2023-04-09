import React from 'react'
import { SecondaryTitleTypes } from './types'

const SmallTitle = ({children}:SecondaryTitleTypes) => {
  return (
    <h3 className="font-serif font-bold">{children}</h3>
  )
}

export default SmallTitle