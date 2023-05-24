import ImagesSlider from '@/modules/common/ImagesSlider'
import SectionsContainer from '@/modules/common/SectionsContainer'
import React from 'react'

const photos = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
]

const ImagesSection = () => {
  return (
    <SectionsContainer size='sm' className='py-10'>
      <ImagesSlider photos={photos}/>
    </SectionsContainer>
  )
}

export default ImagesSection