import React from "react";
import styles from "../../../styles/home page/our services.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import dynamic from "next/dynamic";

const Zoom = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Zoom),
  {
    ssr: false
  }
);

function OurServices() {
  return (
    <>
      <Zoom delay={100} reset>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceMainBox}>
              <div className={styles.header}>
                <h1>Our Primary</h1>
                <h1>Concern</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Our primary concern is to drive innovation and deliver
                  exceptional solutions that empower our clients.
                </p>
              </div>

              <div className={styles.readMore}>
                <button>Read More</button>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceBoxIcon}>
                <SchoolIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>Revolutionizing Education </h1>
              </div>

              <div className={styles.description}>
                <p>
                  Smart tools for smarter schools - steamlining operations and
                  enhancing learning with innovative software solutions
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceBoxIcon}>
                <LocalLibraryIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>Empowering Future IT Leaders</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Nurturing the next tech generation with expert guidance,
                  hands-on training, and industry insights
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceBoxIcon}>
                <HealthAndSafetyIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>Connecting Healthcare Smarter</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Building bridges between patients and providers - seamless
                  booking, better care, and healthier connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}
export default OurServices;
