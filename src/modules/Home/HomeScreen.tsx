import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import AboutUsSection from "./AboutUsSection";
import DestinationsSection from "./DestinationsSection";
import ForCustomerSection from "./ForCustomersSection";
import BlogSection from "./BlogSection";


export default function HomeScreen() {
  return (
    <Layout title="Al Bukhari Travel">
      <Hero />
      <AboutUsSection />
      <DestinationsSection />
      <ForCustomerSection />
      <BlogSection />
    </Layout>
  );
}
