import React from "react";
import Navigation from '../pages/navigation-bar'
import Showcase from "../pages/showcase";
import Footer from '../pages/footer'

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Showcase />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
