import React from "react";
import Topbar from "./top-bar";
import Navigation from './home/navigation-bar'
import Showcase from "./home/showcase";
import Footer from './home/footer'
import AfterShowCase from './home/after-showcase'

function Layout({ children }) {
  return (
    <div>
      <Topbar />
      <Navigation />
      <Showcase />
      <AfterShowCase />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
