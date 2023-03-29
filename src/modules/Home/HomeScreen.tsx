import Layout from '@/modules/common/Layout'
import Navbar from '@/modules/common/Navbar'

export default function HomeScreen() {
  return (
    <Layout title='Al Bukhari Travel'>
      <div className='bg-gray-light h-full'>
        <Navbar />
      </div>
      <h1 className='text-3xl font-bold underline font-serif'>Hello world!</h1>
    </Layout>
  )
}
