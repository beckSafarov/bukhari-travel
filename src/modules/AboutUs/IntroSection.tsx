import React from 'react'
import SectionsContainer from '../common/SectionsContainer'
import Title from '../common/Typography/Title'

const IntroSection = () => {
  return (
    <SectionsContainer size='small' className='xl:py-20 md:py-10 xsm:py-10'>
      <div className='mb-10 text-center'>
        <Title>
          The first Islamic Travel Agency in Uzbekistan
        </Title>
      </div>
      <div className='flex flex-col space-y-2'>
        <p>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sit
            dolor adipisci tempora facilis commodi aperiam, eos quod
            exercitationem magni!
          </strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          minima eaque tempore in vero expedita aliquam consectetur veritatis,
          totam sed architecto at id similique iure itaque beatae quae enim esse
          optio eligendi labore odio! Fugit optio distinctio aperiam quas illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          minima eaque tempore in vero expedita aliquam consectetur veritatis,
          totam sed architecto at id similique iure itaque beatae quae enim esse
          optio eligendi labore odio! Fugit optio distinctio aperiam quas illo.
        </p>
      </div>
    </SectionsContainer>
  )
}

export default IntroSection
