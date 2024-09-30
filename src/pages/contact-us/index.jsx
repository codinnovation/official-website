import React, { useEffect, useRef } from "react";
import styles from "../../styles/contact-us.module.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Layout from "../layout";
import Head from "next/head";
import { motion } from "framer-motion";

function ContactUs() {
  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  const aboutHeaderRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToRef = (ref) => {
    const element = ref.current;
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 3000; // 3 seconds
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, end - start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  useEffect(() => {
    if (aboutHeaderRef.current) {
      scrollToRef(aboutHeaderRef);
    }
  }, [scrollToRef]);

  return (
    <>
      <Head>
        <title>Contact Us | Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <Layout>
        <div className={styles.contactContainer} ref={aboutHeaderRef}>
          <div className={styles.contactContent}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.contactBox}
            >
              <FmdGoodIcon className={styles.icon} />
              <div className={styles.contactBoxHeader}>
                <h1>Address:</h1>
                <p>198 West 21th Street</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.contactBox}
            >
              <LocalPhoneIcon className={styles.icon} />
              <div className={styles.contactBoxHeader}>
                <h1>Phone:</h1>
                <p>+233 597 063 145</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.contactBox}
            >
              <SendIcon className={styles.icon} />
              <div className={styles.contactBoxHeader}>
                <h1>Email:</h1>
                <p>codinnovations001@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.contactBox}
            >
              <WhatsAppIcon className={styles.icon} />
              <div className={styles.contactBoxHeader}>
                <h1>WhatsApp:</h1>
                <p>+233 500 976 882</p>
              </div>
            </motion.div>
          </div>

          <div className={styles.mapContainer}></div>
        </div>
      </Layout>
    </>
  );
}
export default ContactUs;
