import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/home page/hero section.module.css";
import HeroImage from "../../../../public/hero-img.svg";
import { Motion, spring } from "react-motion";

function HeroSection() {
  // State to track when the page is visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <Motion
          defaultStyle={{ x: -200, opacity: 0 }}
          style={{
            x: spring(isVisible ? 0 : -200),
            opacity: spring(isVisible ? 1 : 0)
          }}
        >
          {(style) => (
            <div
              className={styles.heroDescriptionContainer}
              style={{
                transform: `translateX(${style.x}px)`,
                opacity: style.opacity
              }}
            >
              <div className={styles.heroDescriptionCaption}>
                <p>Every Child Yearns To Learn</p>
              </div>
              <div className={styles.heroDescriptionHeader}>
                <h1>Welcome To </h1>
                <h1>COD Innovations</h1>
              </div>

              <div className={styles.heroTagline}>
                <h3>
                  Replenish seasons may male hath fruit beast were seas saw you
                  arrie said man beast whales his void unto last session for
                  bite. Set have great you&apos;sll
                </h3>
              </div>

              <div className={styles.heroButton}>
                <button>View Course</button>
                <button>Get Started</button>
              </div>
            </div>
          )}
        </Motion>

        {/* Motion for Hero Image */}
        <Motion
          defaultStyle={{ x: 200, opacity: 0 }}
          style={{
            x: spring(isVisible ? 0 : 200),
            opacity: spring(isVisible ? 1 : 0)
          }}
        >
          {(style) => (
            <div
              className={styles.heroImage}
              style={{
                transform: `translateX(${style.x}px)`,
                opacity: style.opacity
              }}
            >
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>
          )}
        </Motion>
      </div>
    </div>
  );
}

export default HeroSection;
