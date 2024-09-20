import React from "react";
import styles from '../../styles/first-header.module.css';
import EmailIcon from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { motion } from "framer-motion";

function Index() {
  const facebookLink = () => {
    const url =
      "https://www.facebook.com/profile.php?id=61559909200927";
    window.open(url, "_blank");
  };

  const WhatsAppLink = () => {
    const url = "https://wa.me/+233500976882";
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

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };


  return (
    <>
      <motion.div
        className={styles.topNavContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ infinity: true }}
        variants={slideInVariant}
      >
        <div className={styles.navItemsContainer}>
          <motion.div
            className={styles.contactInfoContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.contactItem}>
              <PhoneIphoneIcon className={styles.icon} />
              <span>+233 59706 3145</span>
            </div>

            <div className={styles.contactItem}>
              <EmailIcon className={styles.icon} />
              <span>codinnovations001@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.socialMediaContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <WhatsApp className={styles.icon} onClick={WhatsAppLink} />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <FacebookOutlinedIcon className={styles.icon} onClick={facebookLink} />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <LinkedInIcon className={styles.icon} onClick={linkedInLink} />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <InstagramIcon className={styles.icon} onClick={InstagramLink} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Index;
