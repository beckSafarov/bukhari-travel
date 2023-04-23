import React from 'react'
import Layout from '../common/Layout'
import StaticHero from '../common/Hero/StaticHero'
import IntroSection from './IntroSection'
import FAQSection from './FAQSection'

const AboutUs = () => {
  return (
    <Layout title='About Us'>
      <StaticHero title='About Us' image='/images/hero_1.png' />
      <IntroSection/>
      <FAQSection/>
    </Layout>
  )
}

export default AboutUs