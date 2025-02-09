import React, { useEffect, useState } from "react";
import HeroSection from "./hero-section";
import Services from "./services";
import WhoWeAre from "./who-we-are";
import Testimonial from "./testimonials";
import Glance from "./glance";
import Footer from "./footer";
import Head from "next/head";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_ADSENSE_ID} />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
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
    </>
  );
}

export default HomePage;
