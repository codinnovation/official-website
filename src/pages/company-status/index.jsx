import React from "react";
import styles from "../../styles/company-status.module.css";
import Image from "next/image";
import StatsImg from "../../../public/client-banner.jpg";
import MoodIcon from "@mui/icons-material/Mood";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PeopleIcon from "@mui/icons-material/People";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";

function CompanyStatus() {
  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <>
      <div className={styles.statusContainer}>
        <div className={styles.statusContent}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleUpVariant}
            viewport={{ infinity: true }}
            className={styles.statusImage}
          >
            <Image src={StatsImg} width={900} height={900} alt="img" />
          </motion.div>

          <div className={styles.statContainer}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ infinity: true }}
              className={styles.stat}
            >
              <MoodIcon className={styles.icon} />
              <div className={styles.statText}>
                <h1>2</h1>
                <p>Happy clients who trust us</p>{" "}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ infinity: true }}
              className={styles.stat}
            >
              <AccountTreeIcon className={styles.icon} />
              <div className={styles.statText}>
                <h1>5</h1>
                <p>Successful projects completed</p>{" "}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ infinity: true }}
              className={styles.stat}
            >
              <SupportAgentIcon className={styles.icon} />
              <div className={styles.statText}>
                <h1>1390</h1>
                <p>Clients supported with quality services</p>{" "}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ infinity: true }}
              className={styles.stat}
            >
              <PeopleIcon className={styles.icon} />
              <div className={styles.statText}>
                <h1>2</h1>
                <p>Dedicated team members</p>{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CompanyStatus;
