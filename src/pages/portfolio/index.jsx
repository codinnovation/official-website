import React from "react";
import Image from "next/image";
import Layout from "../layout";
import styles from "../../styles/portfolio.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import ProjectOne from "../../../public/projects/project-1.png";
import ProjectTwo from "../../../public/projects/project-2.png";
import ProjectThree from "../../../public/projects/project-3.png";

function Portfolio() {
  return (
    <>
      <Layout>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioContainerHeader}>
            <h1>Innovative </h1>
            <h1>Projects</h1>
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
              className={styles.Carousel}
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
