import FAQAccordions from '@/modules/common/FAQAccordions'
import SectionsContainer from '@/modules/common/SectionsContainer'
import Title from '@/modules/common/Typography/Title'
import Image from 'next/image'
import React from 'react'
type ItineraryDataTypes = {
  question: string,
  content: {
    img: string, 
    body: string
  }
}
const data = [
  {question: "Day 1: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 2: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 3: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 4: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 5: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 6: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
  {question: "Day 7: Lorem ipsum dolor", content: {
    img: '/images/1.png',
    body: 'lorem ipsum dolor'
  }},
]

const ItinerarySection = () => {
  const refinedData = data.map((obj:ItineraryDataTypes)=>{
    return {
      ...obj,
      content: <>{obj.content.body}</>,
    }
  })
  return (
    <SectionsContainer className='pt-5 pb-10' size='sm'>
      <Title>Itinerary and Map</Title>
      <div className="pt-5">
        <FAQAccordions data={refinedData} bordered noHighlight/>
      </div>
    </SectionsContainer>
  )
}

export default ItinerarySection