import React from 'react'

interface TitleProps {
  children: React.ReactNode,
  color: string,
  fontSize: string,
}

const Title = ({children, ...rest}:TitleProps) => {
  return (
    <h1 className='font-serif xl:text-6xl xsm:text-5xl leading-tight font-bold' style={rest}>
      {children}
    </h1>
  )
}

Title.defaultProps = {
  color: 'black',
  fontSize: 'auto'
}

export default Title