import React from "react";
import styles from '../../styles/footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { motion } from "framer-motion";
import Image from "next/image";
import CODLOGO from '../../../public/logo-w-2.png'

function Footer() {
  return (
    <>
      <motion.div
        className={styles.footerContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.footerContent}>
          <motion.div
            className={styles.companyName}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image src={CODLOGO} width={900} height={900} alt="cod-logo" />
          </motion.div>

          <motion.div
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p>© {new Date().getFullYear()} COD Innovations. All Rights Reserved</p>
          </motion.div>

          <motion.div
            className={styles.socialMedia}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <FacebookIcon className={styles.icon} />
            <WhatsAppIcon className={styles.icon} />
            <XIcon className={styles.icon} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
