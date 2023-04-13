import React from 'react'
import Card from '@/modules/Services/Card'
import Title from '@/modules/common/Typography/Title'
import SectionsContainer from '@/modules/Home/components/SectionsContainer'
import StaticHero from '@/modules/common/Hero/StaticHero'
import Layout from '../common/Layout'

const ServicesPage = () => {
  return (
    <Layout title='Services'>
      <StaticHero
        title='Services'
        subtitle='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      />
      <SectionsContainer>
        <div className=' text-center py-28'>
          <Title>Our Services include ...</Title>
          <div className='mt-20 grid lg:grid-cols-4 grid-cols-2 lg:px-12 items-center justify-center align-middle'>
            {Array(8).fill(0).map((_:number)=>(
              <Card key={_}/>
            ))}
          </div>
        </div>
      </SectionsContainer>
    </Layout>
  )
}

export default ServicesPage
