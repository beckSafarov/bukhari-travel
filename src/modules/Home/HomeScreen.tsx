import Layout from '@/modules/common/Layout'
import Hero from '../common/Hero/Hero'
import StaticHero from "../common/Hero/StaticHero";
import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection/index";
import ForCustomerSection from "./ForCustomerSection";
import BlogSection from "./BlogSection";

export default function HomeScreen() {
  return (
    <Layout title="Al Bukhari Travel">
      <Hero/>
      <AboutUsSection />
      <ServicesSection />
      <ForCustomerSection />
      <BlogSection />
    </Layout>
  );
}
