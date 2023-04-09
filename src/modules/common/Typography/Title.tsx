import React from 'react'
import { TitleTypes } from './types'

const Title = ({children, ...rest}:TitleTypes) => {
  const className = rest?.className
  return (
    <h1
      className={`font-serif xl:text-5xl xsm:text-5xl leading-tight font-bold ${className}`}
      style={rest}
    >
      {children}
    </h1>
  )
}

Title.defaultProps = {
  color: 'black',
  fontSize: 'auto'
}

export default Title