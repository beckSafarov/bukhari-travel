import React from 'react'
import { TitleProps } from '@/interfaces';

const Title = ({children, ...rest}:TitleProps) => {
  const className = rest?.className
  return (
    <h1
      className={`font-serif xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-tight md:leading-tight font-bold ${className}`}
      style={rest}
    >
      {children}
    </h1>
  );
}

Title.defaultProps = {
  color: 'black',
  fontSize: 'auto'
}

export default Title