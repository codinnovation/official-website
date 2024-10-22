import React from "react";
import styles from "../../../styles/home page/about us.module.css";
import Image from "next/image";
import AboutImage from "../../../../public/img1 (1).png";


function AboutUs() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image src={AboutImage} width={900} height={900} alt="" />
          </div>

          <div className={styles.aboutUs}>
            <div className={styles.topHeader}>
              <hr />
              <h1>About US</h1>
            </div>

            <div className={styles.header}>
              <h1>Discover Who</h1>
              <h1>We are</h1>
            </div>

            <div className={styles.description}>
              <p>
                COD Innovations is on a mission to revolutionize education
                across Africa, beginning with our current operations in Ghana.
                Our core focus is developing innovative software applications
                tailored for educational institutions. By digitizing and
                streamlining traditional school management processes...
              </p>
            </div>

            <div className={styles.readMore}>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
