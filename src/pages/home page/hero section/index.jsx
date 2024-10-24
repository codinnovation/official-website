import React from "react";
import Image from "next/image";
import styles from "../../../styles/home page/hero section.module.css";
import HeroImage from "../../../../public/hero-img.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
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
            <p>Courage, Obedience, and Discipline</p>
          </div>
          <div className={styles.heroDescriptionHeader}>
            <h1>Welcome To </h1>
            <h1>COD Innovations</h1>
          </div>

          <Slide direction="right">
            <div className={styles.heroTagline}>
              <h3>
                At the intersection of courage, discipline, and obedience, we
                unlock innovative possibilities that drive industries forward,
                creating new opportunities for growth and transformation
              </h3>
            </div>
          </Slide>

          <div className={styles.heroButton}>
            <button>Contact Us</button>
            <PlayArrowIcon
              className={`${styles.icon} ${styles.animatedIcon}`}
            />
          </div>
        </div>

        <div className={styles.heroImage}>
          <Slide reset duration={1500} direction="left">
            <Image src={HeroImage} width={900} height={900} alt="Hero Image" />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
