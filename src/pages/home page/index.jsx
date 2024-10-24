import React from "react";
import TopBar from "./top bar";
import HeroSection from "./hero section";
import OurServices from "./our-services";
import AboutUs from "./about us";
import Glance from "./glance";
import Footer from "./footer";
import Testimonial from "./testimonials";
import Portfolio from "./portfolio";

function HomePage() {
  return (
    <>
      <div>
        <TopBar />
        <HeroSection />
        <OurServices />
        <AboutUs />
        <Glance />
        <Testimonial />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
