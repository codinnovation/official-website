import React, { useState } from "react";
import styles from "../../../styles/feedback.module.css";
import CustomerImage from "../../../../public/img1 (3).png";
import HarrietImage from "../../../../public/harriet (1).png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { motion } from "framer-motion";


function Index() {
  return (
    <>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackContainerHeader}>
          <h1>Hear from our</h1>
          <h1>clients</h1>
        </div>

        <div className={styles.feedbackContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ infinity: true }}
            className={styles.feedback}
          >
            <div className={styles.feedbackImage}>
              <Image src={HarrietImage} width={900} height={900} alt="customer-image" />
            </div>
            <h1>Yeboah Harriet</h1>
            <p>I just want to take a moment to express my gratitude to COD Innovations team. I wanted to learn how to build websites, and even though I am not from the IT field, they stepped in to help me. The good news is that I did not pay a single cent for their support .I am truly thankful for everything they&apos;ve done for me</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ infinity: true }}
            className={styles.feedback}
          >
            <div className={styles.feedbackImage}>
              <Image src={CustomerImage} width={900} height={900} alt="customer-image" />
            </div>
            <h1>Kwabena Sakyi Asumadu</h1>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ infinity: true }}
            className={styles.feedback}
          >
            <div className={styles.feedbackImage}>
              <Image src={CustomerImage} width={900} height={900} alt="customer-image" />
            </div>
            <h1>Kwabena Sakyi Asumadu</h1>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          </motion.div>
        </div>

        <div className={styles.feedbackButtons}>
          <ArrowBackIcon className={styles.icon} />
          <ArrowForwardIcon className={styles.icon} />
        </div>
      </div>
    </>
  );
}

export default Index;
