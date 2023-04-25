import useResponsiveDesign from '@/hooks/useResponsiveDesign'
import SubTitle from '@/modules/common/Typography/SubTitle'
import { DestinationCardType } from '@/types'
import Image from 'next/image'
import React from 'react'

const DestinationCard = ({title, image, price, subtitle}:DestinationCardType) => {
  const {isMobile, isTablet, isLaptop} = useResponsiveDesign()
  const width = isMobile ? 150 : isTablet ? 180 : isLaptop ? 250 : 400

  return (
    <div className='relative flex flex-col space-y-3 pb-5' style={{width}}>
      <div className='relative'>
        <Image height={width} width={width} src={image} alt={title} />
        <div className='absolute bottom-0 right-0 lg:p-5 xsm:p-1 bg-white text-orange'>
          ${' '+price}
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <h3 className='font-serif xl:text-2xl font-bold'>{title}</h3>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </div>
  )
}

export default DestinationCard