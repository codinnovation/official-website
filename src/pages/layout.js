import React from "react";
import Topbar from "./top-bar";
import Navigation from '../pages/navigation-bar'
import Showcase from "../pages/showcase";
import Footer from '../pages/footer'
import AfterShowCase from '../pages/after-showcase'

function Layout({ children }) {
  return (
    <div>
      <Topbar/>
      <Navigation />
      <Showcase />
      <AfterShowCase/>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
