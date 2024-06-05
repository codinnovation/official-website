import React from "react";
import styles from "../../../styles/footer.module.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Index() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <h1>GET in touch</h1>
        </div>

        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>
              <FmdGoodIcon className={styles.footerIcon} />
            </div>
            <div className={styles.contactInfoText}>
              <p>Kumasi-Ashanti, Ghana</p>
            </div>
          </div>

          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>
              <PhoneIcon className={styles.footerIcon} />
            </div>
            <div className={styles.contactInfoText}>
              <p>0597063145</p>
            </div>
          </div>

          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>
              <EmailIcon className={styles.footerIcon} />
            </div>
            <div className={styles.contactInfoText}>
              <p>codinnovations001@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaHeader}>
            <h1>Follow us</h1>
          </div>
          <div className={styles.socialMediaItems}>
            <FacebookIcon className={styles.footerIcon} />
            <TwitterIcon className={styles.footerIcon} />
            <LinkedinIcon className={styles.footerIcon} />
            <InstagramIcon className={styles.footerIcon} />
          </div>
        </div>

        <div className={styles.footerLine}>
          <hr className={styles.footerHr} />
        </div>

        <div className={styles.footerLast}>
          <p>&copy; 2024 All Rights Reserved By Cod Innovations</p>
        </div>
      </div>
    </>
  );
}

export default Index;