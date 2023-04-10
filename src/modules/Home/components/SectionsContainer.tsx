import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'
const maxWidth = process.env.NEXT_PUBLIC_TW_MAX_WIDTH
interface SectionsContainerProps { 
  children: React.ReactNode, 
  className: string 
}

const SectionsContainer = ({children, className}:SectionsContainerProps) => {
  
  return (
    <div
      className={`${maxWidth} mx-auto h-full ${mobileSideSpacing} ${className}`}
    >
      {children}
    </div>
  )
}

SectionsContainer.defaultProps = {
  className: ''
}

export default SectionsContainer