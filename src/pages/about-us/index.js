import React from "react";
import styles from '../../styles/about.module.css';
import Image from "next/image";
import CEOImage from "../../../public/img1 (1).png";

function Index() {

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image src={CEOImage} alt="ceo-logo" width={900} height={900} />
          </div>

          <div className={styles.aboutDescription}>
            <div className={styles.aboutHeader}>
              <h1>Who</h1>
              <h1>Are</h1>
              <h1>We ?</h1>
            </div>

            <div className={styles.aboutTagline}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit</p>
         
            </div>

            <div className={styles.aboutButton}>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
