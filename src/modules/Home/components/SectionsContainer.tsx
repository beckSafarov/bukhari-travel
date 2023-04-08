import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'

interface SectionsContainerProps { 
  children: React.ReactNode, 
  className: string 
}

const SectionsContainer = ({children, className}:SectionsContainerProps) => {

  return (
    <div
      className={`xl:max-w-[1360px] mx-auto h-full ${mobileSideSpacing} ${className}`}
    >
      {children}
    </div>
  )
}

SectionsContainer.defaultProps = {
  className: ''
}

export default SectionsContainer