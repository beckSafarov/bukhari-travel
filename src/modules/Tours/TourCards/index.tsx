import SectionsContainer from '@/modules/common/SectionsContainer'
import React from 'react'
import TourCard from './TourCard'
import { TourCardDataTypes } from '@/types'
import cardsData from './cardsData'

const TourCards = () => {
  return (
    <SectionsContainer className='py-20' size='sm'>
      <div className='flex flex-col space-y-5'>
        {cardsData.map((cardData: TourCardDataTypes, i: number) => (
          <TourCard data={cardData} key={i} />
        ))}
      </div>
    </SectionsContainer>
  )
}

export default TourCards
