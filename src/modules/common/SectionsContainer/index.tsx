import { SectionsContainerProps } from '@/interfaces'
import { mobileSideSpacing, smallMobileSideSpacing } from '@/modules/utils'
import React from 'react'
const bigMaxWidth = process.env.NEXT_PUBLIC_MAX_WIDTH
const smMaxWidth = process.env.NEXT_PUBLIC_MAX_BLOG_WIDTH

const SectionsContainer = ({ children, className, size, id }: SectionsContainerProps) => {
  const maxWidth = size === 'lg' ? bigMaxWidth : smMaxWidth
  const sideSpacings = size === 'lg' ? mobileSideSpacing : smallMobileSideSpacing
  return (
    <div
      className={`mx-auto h-full ${sideSpacings} ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
      id={id}
    >
      {children}
    </div>
  )
}

SectionsContainer.defaultProps = {
  className: '',
  size: 'lg'
}

export default SectionsContainer
