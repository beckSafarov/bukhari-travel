import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import AboutUsSection from './AboutUsSection'
import ServicesSection from './ServicesSection'

export default function HomeScreen() {
  return (
    <Layout title='Al Bukhari Travel'>
      <Hero/>
      <AboutUsSection/>
      <ServicesSection/>
    </Layout>
  )
}
