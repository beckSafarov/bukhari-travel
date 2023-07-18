import Image from 'next/image'
import React from 'react'

const MasterCardLogo = ({ size }: { size: number }) => {
  return (
    <div>
      <Image alt='' src='/images/mastercard.png' width={size} height={size} />
    </div>
  )
}

export default MasterCardLogo
