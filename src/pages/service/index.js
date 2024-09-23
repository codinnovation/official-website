import React, { useEffect, useState } from "react";
import styles from '../../styles/service.module.css';
import { useRouter } from "next/router";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

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
            <div className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Custom Website solutions </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim</p>
            </div>

            <div className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Custom Website solutions </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim</p>
            </div>

            <div className={styles.servicebox}>
              <MiscellaneousServicesIcon className={styles.icon} />
              <h1>Custom Website solutions </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim</p>
            </div>
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
