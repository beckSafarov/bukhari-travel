import HomeScreen from '@/modules/Home/HomeScreen'
import { HomeResDataTypes } from '@/types/HomeTypes'

export default function Home({ data }: { data: HomeResDataTypes }) {
  return <HomeScreen data={data.attributes}/>
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-page`)
  const {data} = await res.json()
  return {
    props: { data},
    revalidate: 1,
  }
}
