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
            <h1>Innovating for a </h1>
            <h1>Smarter Future</h1>
          </div>

          <Slide direction="right">
            <div className={styles.heroTagline}>
              <h3>
                We tackle the challenges of outdated education systems,
                disconnected healthcare services, and a lack of opportunities
                for aspiring IT professionals. Through our innovative solutions,
                we transform learning environments, connect healthcare providers
                with patients, and equip future tech leaders with the skills
                they need to thrive.
              </h3>
            </div>
          </Slide>

          <div className={styles.heroButton}>
            <button>Explore Our Services</button>
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
