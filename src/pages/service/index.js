import React, { useEffect, useState } from "react";
import styles from '../../styles/service.module.css';
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
              <h1>Custom Software Solutions </h1>
              <p>We develop custom software solutions for businesses, individuals, and institutions. Whether you need a website, a mobile app, or a tailored application, we are here to meet your unique requirements.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ infinity: true }}
              className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>School-Focused Services </h1>
              <p>Our school-focused services are designed to enhance the learning experience and streamline administrative processes. Our mission is to empower educational institutions with innovative technology solutions, such as school management systems, learning management systems, and custom websites tailored for schools.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ infinity: true }}
              className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Programming Education </h1>
              <p>Training young aspiring programmers through engaging workshops, intensive boot camps, and specialized programs. Our curriculum includes essential programming languages and hands-on projects, along with mentorship opportunities and career development resources to prepare students for successful careers in technology.</p>
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
