import React from "react";
import styles from "../../../styles/home page/about us.module.css";
import Image from "next/image";
import AboutImage from "../../../../public/img1 (1).png";
import dynamic from "next/dynamic";

const Fade = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Fade),
  {
    ssr: false
  }
);

function AboutUs() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <Fade reset duration={4000}>
            <div className={styles.aboutImage}>
              <Image src={AboutImage} width={900} height={900} alt="" />
            </div>
          </Fade>

          <div className={styles.aboutUs}>
            <div className={styles.topHeader}>
              <hr />
              <h1>Who We Are</h1>
            </div>

            <div className={styles.header}>
              <h1>Innovating Today for a Better Tomorrow</h1>
            </div>

            <div className={styles.description}>
              <p>
                At COD Innovations, we are passionate about creating impactful
                solutions that make a difference in education, technology, and
                healthcare. As pioneers in software development, we aim to
                transform schools, empower aspiring IT professionals, and bridge
                gaps in healthcare delivery. Guided by innovation and a
                commitment to excellence, our mission is to empower communities
                and build a brighter future for all...
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
