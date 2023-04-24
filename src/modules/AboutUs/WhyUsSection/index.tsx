import SectionsContainer from '@/modules/common/SectionsContainer'
import Title from '@/modules/common/Typography/Title'
import React from 'react'
import Card from './Card'
import WhyUsData from './WhyUsData'
import { WhyUsDataType } from '@/types'

const WhyUsSection = () => {
  return (
    <div className='w-full h-full bg-gray-light'>
      <SectionsContainer className='py-20' size='small'>
        <Title className='lg:text-left xsm:text-center'>Why choose Bukhari Travel?</Title>
        <div className='pt-20 grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2 xsm:grid-cols-1 lg:px-12 items-start justify-center'>
          {WhyUsData.map((data: WhyUsDataType, i: number) => (
            <Card key={i} {...data} />
          ))}
        </div>
      </SectionsContainer>
    </div>
  )
}

export default WhyUsSection