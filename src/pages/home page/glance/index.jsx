import React from "react";
import styles from "../../../styles/home page/glance.module.css";

function Glance() {
  return (
    <>
      <div className={styles.glanceContainer}>
        <div className={styles.glanceContent}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h1>1024</h1>
            </div>
            <hr />
            <div className={styles.sectionDescription}>
              <p>The Team</p>
            </div>
          </div>

		  <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h1>55</h1>
            </div>
            <hr />
            <div className={styles.sectionDescription}>
              <p>All Students</p>
            </div>
          </div>

		  <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h1>05</h1>
            </div>
            <hr />
            <div className={styles.sectionDescription}>
              <p>Online Students</p>
            </div>
          </div>

		  <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h1>1024</h1>
            </div>
            <hr />
            <div className={styles.sectionDescription}>
              <p>The Team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Glance;
