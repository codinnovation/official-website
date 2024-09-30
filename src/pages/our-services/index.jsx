import React, { useRef, useEffect } from "react";
import styles from "../../styles/our-services.module.css";
import Layout from "../layout";
import Head from "next/head";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { motion } from "framer-motion";

function OurServices() {
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
	
	  // Ease in out function for smoother animation
	  const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	  };
	
	  // Scroll to about header when component mounts
	  useEffect(() => {
		if (aboutHeaderRef.current) {
		  scrollToRef(aboutHeaderRef);
		}
	  }, [scrollToRef]);

  return (
    <>
	  <Head>
        <title>Our Services | Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <Layout>
        <div className={styles.serviceContainer} ref={aboutHeaderRef}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceContentHeader}>
              <h1>Our</h1>
              <h1>Services</h1>
            </div>

            <div className={styles.serviceBoxContainer}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ infinity: true }}
                className={styles.servicebox}
              >
                <MiscellaneousServicesIcon className={styles.icon} />
                <h1>Advanced Tech Solutions for Education </h1>
                <p>
                  Our cutting-edge software solutions empower schools and
                  educational institutions to streamline administrative
                  processes, enhance student engagement, and foster better
                  learning outcomes through technology-driven innovation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ infinity: true }}
                className={styles.servicebox}
              >
                <MiscellaneousServicesIcon className={styles.icon} />
                <h1>Building the Next Generation of Coders </h1>
                <p>
                  We mentor and train aspiring developers through immersive
                  bootcamps, hands-on internships, and specialized short
                  courses, equipping them with the skills and real-world
                  experience needed to excel in dynamic tech careers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ infinity: true }}
                className={styles.servicebox}
              >
                <MiscellaneousServicesIcon className={styles.icon} />
                <h1>Tailored Digital Solutions for Your Business </h1>
                <p>
                  We provide tailor-made websites, robust e-commerce platforms,
                  and innovative software solutions meticulously designed to
                  drive growth, enhance operational efficiency, and empower
                  businesses of all sizes to thrive in a competitive marketplace
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default OurServices;
