import React from "react";
import { useRouter } from "next/router";
import styles from '../../../styles/about.module.css';
import Image from "next/image";
import CEOImage from "../../../../public/img1 (1).png";
import { motion } from 'framer-motion'

function Index() {
  const router = useRouter()
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
              <p>COD Innovations is on a mission to revolutionize education across Africa, beginning with  our current operations in Ghana. Our core focus is developing innovative software applications tailored for educational institutions. By digitizing and streamlining traditional school management processes, we aim to boost operational efficiency and elevate the learning experience for both educators and students...</p>
            </div>

            <div className={styles.aboutButton}>
              <button onClick={() => router.push('/who-are-we')}>Read More</button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Index;
