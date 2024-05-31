import React from "react";
import styles from "../../../styles/top-nav.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_1}>
            <div className={styles.container_1_items}>
              <PhoneIcon />
              <span>+233 59706 3145</span>
            </div>

            <div className={styles.container_1_items}>
              <EmailIcon />
              <span>codinnovations@gmail.com</span>
            </div>
          </div>

          <div className={styles.container_2}>
            <div className={styles.container_2_items}>
              <XIcon />
            </div>
            <div className={styles.container_2_items}>
              <FacebookOutlinedIcon />
            </div>
            <div className={styles.container_2_items}>
              <LinkedInIcon />
            </div>
            <div className={styles.container_2_items}>
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
