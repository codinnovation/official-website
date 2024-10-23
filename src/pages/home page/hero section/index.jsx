import React from "react";
import Image from "next/image";
import styles from "../../../styles/home page/hero section.module.css";
import HeroImage from "../../../../public/hero-img.svg";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

const Roll = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Roll),
  {
    ssr: false
  }
);

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroDescriptionContainer}>
          <div className={styles.heroDescriptionCaption}>
            <p>Every Child Yearns To Learn</p>
          </div>
          <div className={styles.heroDescriptionHeader}>
            <h1>Welcome To </h1>
            <h1>COD Innovations</h1>
          </div>

          <div className={styles.heroTagline}>
            <Roll>
            <h3>
              Replenish seasons may male hath fruit beast were seas saw you
              arrie said man beast whales his void unto last session for bite.
              Set have great you&apos;sll
            </h3>
            </Roll>
          </div>

          <div className={styles.heroButton}>
            <button>View Course</button>
            <button>Get Started</button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Slide reset duration={1500}>
            <Image src={HeroImage} width={900} height={900} alt="Hero Image" />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
