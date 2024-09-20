import React from "react";
import FirstHeader from "../pages/first-header";
import Navigation from '../pages/navigation-bar'
import Showcase from "../pages/showcase";
import Footer from '../pages/footer'

function Layout({ children }) {
  return (
    <div>
      <FirstHeader />
      <Navigation />
      <Showcase />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
