import Layout from '@/modules/common/Layout'
import Navbar from '@/modules/common/Navbar'
import Hero from '../common/Hero'

export default function HomeScreen() {
  return (
    <Layout title='Al Bukhari Travel'>
      <Hero/>
      <h1 className='text-3xl font-bold underline font-serif'>Hello world!</h1>
    </Layout>
  )
}
