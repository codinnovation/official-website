import React from "react";
import styles from '../../../styles/after-showcase.module.css';
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { motion } from "framer-motion";


function Index() {
  return (
    <>
      <div className={styles.aftershowcaseContainer}>
        <div className={styles.aftershowcaseContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ infinity: true }}
            className={styles.iconBox}>
            <ShieldOutlinedIcon className={styles.icon} />
            <h1>Courage</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ infinity: true }}
            className={styles.iconBox}>
            <DarkModeOutlinedIcon className={styles.icon} />
            <h1>Obedience</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ infinity: true }}
            className={styles.iconBox}>
            <Brightness4OutlinedIcon className={styles.icon} />
            <h1>Discipline</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Index;
