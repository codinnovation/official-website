import React from "react";
import FirstHeader from "../pages/comps/top-nav";
import Nav from "../pages/comps/nav";
import Showcase from "../pages/comps/showcase";
import Footer from '../pages/comps/footer'

function Layout({ children }) {
  return (
    <div>
      <FirstHeader />
      <Nav />
      <Showcase />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
