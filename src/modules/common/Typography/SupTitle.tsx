import React from 'react'
import { SecondaryTitleProps } from '@/interfaces'


const SupTitle = ({children}:SecondaryTitleProps) => {
  return (
    <p className="text-orange text-lg font-sans font-semibold mb-2">
      {children}
    </p>
  );
}

export default SupTitle