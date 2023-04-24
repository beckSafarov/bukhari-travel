import React from 'react'
import SectionsContainer from '../common/SectionsContainer'
import Title from '../common/Typography/Title'
import FAQAccordions from '../common/FAQAccordions'

const data = Array(8).fill({
  question: 'Lorem ipsum dolor sit amet?',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, repellat. Harum voluptatum consectetur unde praesentium similique ratione totam laudantium voluptate.',
})

const FAQSection = () => {
  return (
    <SectionsContainer className='py-20' size='small'>
      <Title className='lg:text-left xsm:text-center'>Frequently Asked Questions</Title>
      <div className="py-10">
        <FAQAccordions data={data} className='lg:pb-0 md:pt-0 pt-0 pb-0'/>
      </div>
    </SectionsContainer>
  )
}

export default FAQSection