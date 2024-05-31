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
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>GET in touch</h1>
        </div>

        <div className={styles.container_items1}>
          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <FmdGoodIcon className={styles.icon} />
            </div>
            <div className={styles.container_item_text}>
              <p>Kumasi-Ashanti, Ghana</p>
            </div>
          </div>

          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <PhoneIcon className={styles.icon} />
            </div>
            <div className={styles.container_item_text}>
              <p>0597063145</p>
            </div>
          </div>

          <div className={styles.container_item}>
            <div className={styles.container_item_icon}>
              <EmailIcon className={styles.icon} />
            </div>
            <div className={styles.container_item_text}>
              <p>codinnovations001@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.container_items2}>
          <div className={styles.container_items2_header}>
            <h1>Follow us</h1>
          </div>
          <div className={styles.container_items2_item}>
            <FacebookIcon className={styles.icon} />
            <TwitterIcon className={styles.icon} />
            <LinkedinIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
          </div>
        </div>

        <div className={styles.container_line}>
          <hr className={styles.hr} />
        </div>

        <div className={styles.container_last}>
          <p>&copy; 2024 All Rights Reserved By Cod Innovations</p>
        </div>
      </div>
    </>
  );
}

export default Index;
