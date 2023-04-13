import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'
const maxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH
interface SectionsContainerProps { 
  children: React.ReactNode, 
  className: string 
}

const SectionsContainer = ({children, className}:SectionsContainerProps) => {
  return (
    <div
      className={`mx-auto h-full ${mobileSideSpacing} ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  )
}

SectionsContainer.defaultProps = {
  className: ''
}

export default SectionsContainer