import React from 'react'

const Para = ({ children, className}: { children: React.ReactNode, className: string }) => {
  return <p className={`font-sans font-normal leading-normal text-sm ${className}`}>{children}</p>
}

Para.defaultProps = {
  className: ''
}

export default Para
