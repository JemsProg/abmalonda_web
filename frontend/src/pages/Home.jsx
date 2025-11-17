import React from "react";
import Hero from "../components/home/Hero";
import Service from "../components/home/Service";
import ChooseUs from "../components/home/ChooseUs";
import Testimonials from "../components/home/Testimonials";
import Partners from "../components/home/Partners";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <ChooseUs />
      <Testimonials />
      <Partners />
      <ContactSection />
    </div>
  );
};

export default Home;
