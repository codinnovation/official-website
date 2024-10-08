import React from "react";
import styles from "../../styles/top-bar.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

function Topbar() {
  function GoToWhatsApp() {
    let phoneNumber = "+233500976882";
    let message = "Hello, I would like to inquire about...";
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  }

  function GoToFacebook() {
    let facebookURL =
      "https://www.facebook.com/profile.php?id=61559909200927&sk=about";

    window.open(facebookURL, "_blank");
  }
  return (
    <>
      <motion.div
        className={styles.topbarContainer}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className={styles.topbarContent}>
          <motion.div
            className={styles.contactInformationContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            <motion.div
              className={styles.contact}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MailOutlineIcon className={styles.icon} />
              <p>codinnovations001@gmail.com</p>
            </motion.div>
            <motion.div
              className={styles.contact}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PhoneIphoneIcon className={styles.icon} />
              <p>+233 500 976 882</p>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.socialmediaContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.icon}
              onClick={GoToWhatsApp}
            >
              <WhatsApp />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.icon}
              onClick={GoToFacebook}
            >
              <FacebookOutlinedIcon />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.icon}
            >
              <LinkedInIcon />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.icon}
            >
              <InstagramIcon />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Topbar;
