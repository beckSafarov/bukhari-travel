import SubTitle from '@/modules/common/Typography/SubTitle'
import Title from '@/modules/common/Typography/Title'
import Image from 'next/image'
import React from 'react'

type DestinationCardType = {
  title: string
  image: string
  price: number
  subtitle: string
}


const DestinationCard = ({title, image, price, subtitle}:DestinationCardType) => {
  const width = 400
  // const widthClass = `w-`
  return (
    <div className='relative flex flex-col space-y-3' style={{width}}>
      <div className='relative'>
        <Image height={width} width={width} src={image} alt={title} />
        <div className='absolute bottom-0 right-0 py-5 px-5 bg-white text-orange'>
          ${' '+price}
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <Title className='xl:text-2xl'>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </div>
  )
}

// DestinationCard.defaultProps = {
//   title: 'Enjoy the beauty of Samarkand',
//   image: '/images/about_1.png',
//   price: 450,
//   subtitle: "Uzbekistan, Samarkand"
// }

export default DestinationCard