import React from "react";
import styles from '../../styles/footer.module.css'
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Index() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.logoContainer}></div>
        </div>
      </div>
    </>
  );
}

export default Index;
