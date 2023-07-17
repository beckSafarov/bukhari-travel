import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import AboutUsSection from "./AboutUsSection";
import DestinationsSection from "./DestinationsSection";
import ForCustomerSection from "./ForCustomersSection";
import BlogSection from "./BlogSection";
import { HomeDataTypes } from '@/types/HomeTypes';


export default function HomeScreen({data}:{data:HomeDataTypes}) {
  console.log(data)
  return (
    <Layout title={data?.pageTitle || 'Bukhari Travel'}>
      <Hero />
      <AboutUsSection />
      <DestinationsSection />
      <ForCustomerSection />
      <BlogSection />
    </Layout>
  );
}
