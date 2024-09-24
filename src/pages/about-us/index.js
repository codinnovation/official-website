import React from "react";
import styles from '../../styles/about.module.css';
import Image from "next/image";
import CEOImage from "../../../public/img1 (1).png";
import { motion } from 'framer-motion'

function Index() {
  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleUpVariant}
            viewport={{ infinity: true }}
            className={styles.aboutImage}>
            <Image src={CEOImage} alt="ceo-logo" width={900} height={900} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleUpVariant}
            viewport={{ infinity: true }}
            className={styles.aboutDescription}>
            <div className={styles.aboutHeader}>
              <h1>Who</h1>
              <h1>Are</h1>
              <h1>We ?</h1>
            </div>

            <div className={styles.aboutTagline}>
              <p>We are a passionate and dedicated team, firmly guided by the core principles of courage, discipline, and innovation, consistently working tirelessly to craft effective solutions that bring bold ideas to life and create lasting, meaningful change.</p>

            </div>

            <div className={styles.aboutButton}>
              <button>Read More</button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Index;
