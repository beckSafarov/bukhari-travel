import Image from 'next/image'
import React from 'react'

const UnionPayLogo = ({size}:{size: number}) => {
  return (
    <div>
      <Image alt='' src='/images/unionpay.png' width={size} height={size} />
    </div>
  )
}

export default UnionPayLogo
