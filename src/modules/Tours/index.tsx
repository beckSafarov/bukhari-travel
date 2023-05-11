import React from 'react'
import Layout from '../common/Layout'
import StaticHero from '../common/Hero/StaticHero'
import TourCards from './TourCards'

const Tours = () => {
  return (
    <Layout title='Tours'>
      <StaticHero title='Tours' image='/images/hero_3.png' />
      <TourCards/>
    </Layout>
  )
}

export default Tours