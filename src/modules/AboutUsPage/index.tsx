import React from "react";
import Layout from "../common/Layout";
import StaticHero from "../common/Hero/StaticHero";
import AboutUsSection from "../Home/AboutUsSection";
import ForCustomerSection from "../Home/ForCustomerSection";

const AboutUsPage = () => {
  return (
    <div>
      <Layout title="About Us">
        <StaticHero
          title="About Us"
          subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <AboutUsSection />
        <ForCustomerSection />
      </Layout>
    </div>
  );
};

export default AboutUsPage;
