import Image from 'next/image'
import React from 'react'

const VisaLogo = ({ size }: { size: number }) => {
  return (
    <div>
      <Image alt='' src='/images/visa.png' width={size} height={size} />
    </div>
  )
}

export default VisaLogo