import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Layout from "../layout";
import styles from "../../styles/portfolio.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
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

  // Ease in out function for smoother animation
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // Scroll to about header when component mounts
  useEffect(() => {
    if (aboutHeaderRef.current) {
      scrollToRef(aboutHeaderRef);
    }
  }, [scrollToRef]);

  return (
    <>
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
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showStatus={false}
              useKeyboardArrows
              stopOnHover={true}
              transitionTime={500}
              showIndicators={true}
              dynamicHeight={true}
              swipeable={true}
              emulateTouch={true}
            >
              <div className={styles.carouselImage}>
                <Image
                  src={ProjectThree}
                  width={900}
                  height={900}
                  alt="Project One"
                />
              </div>
              <div className={styles.carouselImage}>
                <Image
                  src={ProjectTwo}
                  width={900}
                  height={900}
                  alt="Project Two"
                />
              </div>
              <div className={styles.carouselImage}>
                <Image
                  src={ProjectOne}
                  width={900}
                  height={900}
                  alt="Project Three"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Portfolio;
