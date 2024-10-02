import React from "react";
import Topbar from "../top-bar";
import NavigationBar from "../navigation-bar";
import Showcase from "../showcase";
import AfterShowcase from "../after-showcase";
import About from "../about-us";
import Service from "../service";
import CompanyStatus from "../company-status";
import Feedback from "../feedback";
import Gratitude from "../gratitude-from-learner";
import Footer from "../footer";

function HomePage() {
  return (
    <>
      <div>
        <Topbar />
        <NavigationBar />
        <Showcase />
        <AfterShowcase />
        <About />
        <Service />
        <CompanyStatus />
        <Feedback />
        <Gratitude />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
