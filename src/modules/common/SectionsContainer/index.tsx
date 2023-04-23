import { SectionsContainerProps } from '@/interfaces'
import { mobileSideSpacing } from '@/modules/utils'
import React from 'react'
const bigMaxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH
const smallMaxWidth = process.env.NEXT_PUBLIC_MAX_BLOG_WIDTH

const SectionsContainer = ({ children, className, size }: SectionsContainerProps) => {
  const maxWidth = size === 'big' ? bigMaxWidth : smallMaxWidth
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
  className: '',
  size: 'big'
}

export default SectionsContainer
