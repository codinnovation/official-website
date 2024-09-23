import React from "react";
import Image from "next/image";
import CODLOGO from "../../../public/logo-2 (1).png";
import styles from "../../styles/top-bar.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Topbar() {
  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarContent}>
          <div className={styles.contactInformationContainer}>
            <div className={styles.contact}>
              <MailOutlineIcon className={styles.icon} />
              <p>codinnovations001@gmail.com</p>
            </div>
            <div className={styles.contact}>
              <PhoneIphoneIcon className={styles.icon} />
              <p>+233 597 063 145</p>
            </div>
          </div>

          <div className={styles.socialmediaContainer}>
            <WhatsApp className={styles.icon} />
            <FacebookOutlinedIcon className={styles.icon} />
            <LinkedInIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
