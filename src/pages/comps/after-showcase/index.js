import React from "react";
import styles from "../../../styles/after-showcase.module.css";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

function Index() {
  return (
    <>
      <div className={styles.afterShowcaseContainer}>
        <div className={styles.afterShowcaseItemsContainer}>
          <div className={styles.afterShowcaseItem}>
            <div className={styles.afterShowcaseItemIconContainer}>
              <ShieldOutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.afterShowcaseItemTextContainer}>
              <h1>Courage Fuels Innovation</h1>
            </div>
          </div>
          <div className={styles.afterShowcaseItem}>
            <div className={styles.afterShowcaseItemIconContainer}>
              <DarkModeOutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.afterShowcaseItemTextContainer}>
              <h1>Obedience Drives Excellence</h1>
            </div>
          </div>
          <div className={styles.afterShowcaseItem}>
            <div className={styles.afterShowcaseItemIconContainer}>
              <Brightness4OutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.afterShowcaseItemTextContainer}>
              <h1>Discipline Powers Progress</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;