import TopBar from "./home page/top bar";
import HeroSection from "./home page/hero section";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <HeroSection />
      {children}
    </>
  );
}
export default Layout;
