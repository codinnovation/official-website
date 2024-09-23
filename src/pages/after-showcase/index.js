import React from "react";
import styles from '../../styles/after-showcase.module.css';
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

function Index() {

  return (
    <>
      <div className={styles.aftershowcaseContainer}>
        <div className={styles.aftershowcaseContent}>
          <div className={styles.iconBox}>
            <ShieldOutlinedIcon className={styles.icon} />
            <h1>Courage</h1>
          </div>
          <div className={styles.iconBox}>
            <DarkModeOutlinedIcon className={styles.icon} />
            <h1>Obedience</h1>
          </div>
          <div className={styles.iconBox}>
            <Brightness4OutlinedIcon className={styles.icon} />
            <h1>Discipline</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
