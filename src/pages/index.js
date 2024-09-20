import Head from "next/head";
import { useState, useEffect } from "react";
import SupportIcon from "@mui/icons-material/SupportAgent";
import styles from "../styles/Home.module.css";
import FirstHeader from './first-header'
import NavigationBar from './navigation-bar';
import Showcase from "./showcase";
import AfterShowcase from '../pages/after-showcase';
import About from '../pages/about-us';
import Service from '../pages/service';
import Feedback from '../pages/feedback';
import Footer from '../pages/footer'

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSupportOpen(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstContent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <div>
        <FirstHeader />
        <NavigationBar />
        <Showcase />
        <AfterShowcase />
        <About />
        <Service />
        <Feedback />
        <Footer />
        <div
          className={styles.supportContainer}
          onClick={() => setIsSupportOpen(true)}
        >
          <SupportIcon className={styles.icon} />
        </div>
      </div>
    </>
  );
}
