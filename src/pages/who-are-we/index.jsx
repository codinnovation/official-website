import React, { useEffect, useRef } from "react";
import Layout from "../layout";
import Image from "next/image";
import styles from "../../styles/who-are-we.module.css";
import CEOImage from "../../../public/img1 (1).png";
import { motion } from "framer-motion";

function WhoAreWe() {
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
      <Layout>
        <div className={styles.aboutContainer} ref={aboutHeaderRef}>
          <div className={styles.aboutContent}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.aboutImage}
            >
              <Image src={CEOImage} alt="ceo-logo" width={900} height={900} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.aboutDescription}
            >
              <div className={styles.aboutHeader}>
                <h1>Who</h1>
                <h1>Are</h1>
                <h1>We ?</h1>
              </div>

              <div className={styles.aboutTagline}>
                <p>
                  COD Innovations is on a mission to revolutionize education
                  across Africa, beginning with our current operations in Ghana.
                  Our core focus is developing innovative software applications
                  tailored for educational institutions. By digitizing and
                  streamlining traditional school management processes, we aim
                  to boost operational efficiency and elevate the learning
                  experience for both educators and students
                </p>
                <br />
                <p>
                  Beyond our educational software solutions, we&apos;re
                  passionate about nurturing the next generation of tech talent
                  in Africa. Through our comprehensive internship programs,
                  intensive bootcamps, and targeted short courses, we equip
                  aspiring young professionals with the skills and knowledge
                  needed to excel in the fast-paced tech industry.
                </p>
                <br />
                <p>
                  While education and youth empowerment are at the heart of our
                  mission, we also offer a diverse range of digital services to
                  businesses and individuals. Our expertise extends to website
                  development, e-commerce solutions, and custom software
                  creation, allowing us to meet the varied technological needs
                  of our clients.
                </p>
              </div>
            </motion.div>
          </div>

          <div className={styles.problemContainer}>
            <div className={styles.problemContainerHeader}>
              <h1>Problems &</h1>
              <h1>Solutions</h1>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariant}
              viewport={{ infinity: true }}
              className={styles.problemDescription}
            >
              <p>
                The education system in Ghana and many parts of Africa is
                grappling with several systemic challenges that hinder the
                delivery of quality education. COD Innovations is dedicated to
                addressing these pressing challenges through comprehensive
                innovative solutions tailored for the education sector:
              </p>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default WhoAreWe;
