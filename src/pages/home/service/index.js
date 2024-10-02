import React, { useEffect, useState } from "react";
import styles from '../../../styles/service.module.css';
import { useRouter } from "next/router";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { motion } from "framer-motion";

function Index() {
  const [data, setData] = useState([]);
  const router = useRouter();

  return (
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceContentHeader}>
            <h1>Our</h1>
            <h1>Services</h1>
          </div>

          <div className={styles.serviceBoxContainer}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ infinity: true }}
              className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Advanced Tech Solutions for Education </h1>
              <p>Our cutting-edge software solutions empower schools and educational institutions to streamline administrative processes, enhance student engagement, and foster better learning outcomes through technology-driven innovation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ infinity: true }}
              className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Building the Next Generation of Coders </h1>
              <p>We mentor and train aspiring developers through immersive bootcamps, hands-on internships, and specialized short courses, equipping them with the skills and real-world experience needed to excel in dynamic tech careers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ infinity: true }}
              className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Tailored Digital Solutions for Your Business </h1>
              <p>We provide tailor-made websites, robust e-commerce platforms, and innovative software solutions meticulously designed to drive growth, enhance operational efficiency, and empower businesses of all sizes to thrive in a competitive marketplace</p>
            </motion.div>
          </div>

          <div className={styles.serviceContentButton}>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
