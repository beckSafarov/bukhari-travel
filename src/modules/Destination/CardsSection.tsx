import React from "react"
import Card from "./Card"
import SectionsContainer from "../common/SectionsContainer"
import FullButton from "../common/Buttons/FullButton"
import Title from "../common/Typography/Title"
type cityNameType = {
  name: string
}

const CardsSection = ({ name }: cityNameType) => {
  return (
    <div className='flex bg-gray-light items-center justify-center flex-col'>
      <SectionsContainer size="sm">
        <div className='flex items-center flex-col'>
          <Title className='pt-8 pb-4 font-serif'>
            {`${name} small group tours`}
          </Title>
          <center>
            <p className='max-w-[80%] pb-4'>
              Book your Uzbekistan small-group tour with guaranteed departures.
              Explore the popular travel highlights of Uzbekistan or combine
              with sightseeing tours in other Central Asian countries.
            </p>
          </center>
        </div>
        <div className='grid grid-cols-2 pt-4 w-full place-content-center gap-6 justify-between'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <FullButton className='block mx-auto mt-6 mb-12'>See more</FullButton>
      </SectionsContainer>
    </div>
  )
}

export default CardsSection
