import React from "react";
import styles from "../../../styles/after-showcase.module.css";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <ShieldOutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.container_item_text}>
              <h1>Courage Fuels Innovation</h1>
            </div>
          </div>
          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <DarkModeOutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.container_item_text}>
              <h1>Obedience Drives Excellence</h1>
            </div>
          </div>
          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <Brightness4OutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.container_item_text}>
              <h1> Discipline Powers Progress </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
