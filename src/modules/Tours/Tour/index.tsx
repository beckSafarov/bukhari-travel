import StaticHero from '@/modules/common/Hero/StaticHero'
import Layout from '@/modules/common/Layout'
import React from 'react'
import BriefingSection from './BriefingSection'
import SectionsContainer from '@/modules/common/SectionsContainer'
import Head from 'next/head'
import IntroSection from './IntroSection'
import HighlightsSection from './HighlightsSection'
import ItinerarySection from './ItinerarySection'
import ImagesSection from './ImagesSection'

const content = {
  intro:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus modi ea harum dolorem adipisci molestiae impedit numquam rem at culpa voluptatem veniam nisi quis nostrum voluptatibus reprehenderit natus accusamus tempora, ducimus amet officiis commodi fugit temporibus. Ea excepturi laboriosam necessitatibus exercitationem nesciunt, facilis officia nam quis modi porro est quibusdam voluptatum fugiat quo minima suscipit eos earum neque sapiente vel tempore, optio consectetur maiores harum. Nesciunt magni excepturi alias animi aspernatur magnam at eius, corrupti voluptatum sapiente? Eligendi ad quis facere quo optio laborum incidunt sed earum fugit iure, dicta, tempora quos suscipit, sunt quisquam. Mollitia minus assumenda distinctio.',
}

const Tour = () => {
  return (
    <Layout title='Tour'>
      <StaticHero title='Sample Title' subtitle='Sample Subtitle' />
      <BriefingSection />
      <IntroSection text={content.intro}/>
      <HighlightsSection/>
      <ItinerarySection/>
      <ImagesSection/>
    </Layout>
  )
}

export default Tour