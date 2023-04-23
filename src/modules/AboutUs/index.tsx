import React from 'react'
import Layout from '../common/Layout'
import StaticHero from '../common/Hero/StaticHero'
import IntroSection from './IntroSection'
import FAQSection from './FAQSection'
import WhyUsSection from './WhyUsSection'

const AboutUs = () => {
  return (
    <Layout title='About Us'>
      <StaticHero title='About Bukhari Travel' image='/images/hero_1.png' />
      <IntroSection/>
      <WhyUsSection/>
      <FAQSection/>
    </Layout>
  )
}

export default AboutUs