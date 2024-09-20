import React from "react";
import styles from '../../styles/after-showcase.module.css';
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { motion } from "framer-motion";

function Index() {

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <>
      <motion.div
        className={styles.afterShowcaseContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ infinity: true }}
        variants={slideInVariant}
      >
        <motion.div
          className={styles.afterShowcaseItemsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ infinity: true }}
          variants={fadeInVariant}

        >
          <motion.div
            className={styles.afterShowcaseItem}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.afterShowcaseItemIconContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <ShieldOutlinedIcon className={styles.icon} />
            </motion.div>

            <motion.div
              className={styles.afterShowcaseItemTextContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <h1>Courage Fuels Innovation</h1>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.afterShowcaseItem}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.afterShowcaseItemIconContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <DarkModeOutlinedIcon className={styles.icon} />
            </motion.div>

            <motion.div
              className={styles.afterShowcaseItemTextContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <h1>Obedience Drives Excellence</h1>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.afterShowcaseItem}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.afterShowcaseItemIconContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <Brightness4OutlinedIcon className={styles.icon} />
            </motion.div>

            <motion.div
              className={styles.afterShowcaseItemTextContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ infinity: true }}
              variants={fadeInVariant}
            >
              <h1>Discipline Powers Progress</h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
