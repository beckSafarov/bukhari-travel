import StaticHero from '@/modules/common/Hero/StaticHero'
import Layout from '@/modules/common/Layout'
import React from 'react'
import ArticleSection from './ArticleSection'
import SimilarPostsSection from './SimilarPostsSection'

const Article = () => {
  return (
    <Layout title='Sample Article'>
      <StaticHero title='Sample Article' image='/images/hero_3.png'/>
      <ArticleSection/>
      <SimilarPostsSection/>
    </Layout>
  )
}

export default Article