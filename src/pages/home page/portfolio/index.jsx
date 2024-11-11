import React from "react";
import Image from "next/image";
import styles from "../../../styles/home page/portfolio.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import ProjectOne from "../../../../public/projects/project-1.png";
import ProjectTwo from "../../../../public/projects/project-2.png";
import ProjectThree from "../../../../public/projects/project-3.png";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

function Portfolio() {
  return (
    <>
      <Slide direction="right">
        <div className={styles.portfolioContainer}>
          <div className={styles.header}>
            <hr />
            <h1>Innovative Project</h1>
          </div>

          <div className={styles.portfolioContent}>
            <div className={styles.portfolioContentheader}>
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
      </Slide>
    </>
  );
}
export default Portfolio;
