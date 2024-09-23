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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit</p>

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
