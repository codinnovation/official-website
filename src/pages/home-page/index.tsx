import React, { useEffect, useState } from "react";
import HeroSection from "./hero-section";
import Services from "./services";
import WhoWeAre from "./who-we-are";
import Testimonial from "./testimonials";
import Glance from "./glance";
import Footer from "./footer";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`opacity-0 ${isVisible ? "opacity-100" : ""
        } transition-opacity duration-[2500ms] ease-in`}
    >
      <HeroSection />
      <Services />
      <WhoWeAre />
      <Glance />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
