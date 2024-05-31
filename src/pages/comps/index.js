import React from "react";
import Top_Nav from "./top-nav";
import Nav from "./nav";
import Showcase from "./showcase";
import AfterShowcase from "./after-showcase";
import About from "./about-us";
import Glance from "./glance";
import Service from "./service";
import Feedback from "./feedback";
import Footer from "./footer";

function Index() {
  return (
    <div>
      <Top_Nav />
      <Nav/>
      <Showcase />
      <AfterShowcase />
      <About />
      <Glance />
      <Service />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Index;
