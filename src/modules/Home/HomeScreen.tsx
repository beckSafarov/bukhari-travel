import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import AboutUsSection from './AboutUsSection'
import Testimonials from "./Testimonials";

export default function HomeScreen() {
  return (
    <Layout title="Al Bukhari Travel">
      <Hero />
      <AboutUsSection />
      <Testimonials />
    </Layout>
  );
}
