import React from "react";
import styles from "../../../styles/home page/our services.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
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
                <LightModeIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>EdTech Solutions</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Empowering schools with innovative software to streamline
                  admin tasks, boost student engagement, and improve learning
                  outcomes.
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceBoxIcon}>
                <LightModeIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>Shaping Future Coders</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Mentoring aspiring developers through bootcamps, internships,
                  and courses to equip them for tech careers.{" "}
                </p>
              </div>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceBoxIcon}>
                <LightModeIcon className={styles.icon} />
              </div>

              <div className={styles.header}>
                <h1>Custom Digital Solutions</h1>
              </div>

              <div className={styles.description}>
                <p>
                Tailored websites, e-commerce, and software to drive growth and efficiency for businesses.
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
