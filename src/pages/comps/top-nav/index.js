import React from "react";
import styles from "../../../styles/top-nav.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Index() {
  const facebookLink = () => {
    const url =
      "(link unavailable)";
    window.open(url, "_blank");
  };

  const WhatsAppLink = () => {
    const url = "(link unavailable)";
    window.open(url, "_blank");
  };

  const linkedInLink = () => {
    const url = "(link unavailable)";
    window.open(url, "_blank");
  };
  const InstagramLink = () => {
    const url = "(link unavailable)";
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={styles.topNavContainer}>
        <div className={styles.navItemsContainer}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactItem}>
              <PhoneIcon />
              <span>+233 59706 3145</span>
            </div>

            <div className={styles.contactItem}>
              <EmailIcon />
              <span>codinnovations@gmail.com</span>
            </div>
          </div>

          <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaItem} onClick={WhatsAppLink}>
              <WhatsApp />
            </div>
            <div className={styles.socialMediaItem} onClick={facebookLink}>
              <FacebookOutlinedIcon />
            </div>
            <div className={styles.socialMediaItem} onClick={linkedInLink}>
              <LinkedInIcon />
            </div>
            <div className={styles.socialMediaItem} onClick={InstagramLink}>
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;