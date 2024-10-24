import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../layout";
import styles from "../../styles/portfolio.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProjectOne from "../../../public/projects/project-1.png";
import ProjectTwo from "../../../public/projects/project-2.png";
import ProjectThree from "../../../public/projects/project-3.png";



function Portfolio() {
  const aboutHeaderRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToRef = (ref) => {
    const element = ref.current;
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 3000; // 3 seconds
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, end - start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  useEffect(() => {
    if (aboutHeaderRef.current) {
      scrollToRef(aboutHeaderRef);
    }
  }, [scrollToRef]);

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations | Portfolio</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <Layout>
        <div className={styles.portfolioContainer} ref={aboutHeaderRef}>
          <div className={styles.portfolioContainerHeader}>
            <h1>Portfolio of </h1>
            <h1>Innovation</h1>
          </div>

          <div className={styles.portfolioContent}>
            <div className={styles.header}>
              <h1>Juaben APS School Management System</h1>
            </div>

            <div className={styles.portfolioBox}>
              <div className={styles.arrow}>
                <ArrowBackIosIcon />
              </div>

              <div className={styles.portfolioBoxImage}>
                <Image src={ProjectOne} width={900} height={900} alt="" />
              </div>

              <div className={styles.arrowTwo}>
                <ArrowBackIosIcon />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Portfolio;
