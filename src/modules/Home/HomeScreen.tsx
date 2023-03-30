import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import AboutUsSection from './AboutUsSection'

export default function HomeScreen() {
  return (
    <Layout title='Al Bukhari Travel'>
      <Hero/>
      <AboutUsSection/>
    </Layout>
  )
}
