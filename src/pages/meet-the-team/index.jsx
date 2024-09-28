import React, { useEffect, useRef } from "react";
import Layout from "../layout";
import styles from "../../styles/meet-the-team.module.css";
import CEOImage from "../../../public/img1 (1).png";
import Image from "next/image";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import X from "@mui/icons-material/X";
import Head from "next/head";

function MeetTheTeam() {
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
        <title>Meet The Team | Cod - Innovations</title>
        <meta name="description" content="COD Innovations | Meet the Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <Layout>
        <div className={styles.teamContainer} ref={aboutHeaderRef}>
          <div className={styles.teamHeader}>
            <h1>Meet The</h1>
            <h1>Team</h1>
          </div>

          <div className={styles.teamContent}>
            <div className={styles.memberContainer}>
              <div className={styles.memberPhoto}>
                <Image
                  src={CEOImage}
                  width={900}
                  height={900}
                  alt="ceo-image"
                />
              </div>

              <div className={styles.memberName}>
                <h1>Kwabena Asumadu</h1>
              </div>

              <div className={styles.memberPosition}>
                <p>CEO & Founder, Software Developer</p>
              </div>

              <div className={styles.memberSocial}>
                <WhatsApp className={styles.icon} />
                <FacebookOutlined className={styles.icon} />
                <X className={styles.icon} />
              </div>
            </div>
            <div className={styles.memberContainer}>
              <div className={styles.memberPhoto}>
                <Image
                  src={CEOImage}
                  width={900}
                  height={900}
                  alt="ceo-image"
                />
              </div>

              <div className={styles.memberName}>
                <h1>Kwabena Asumadu</h1>
              </div>

              <div className={styles.memberPosition}>
                <p>CEO & Founder, Software Developer</p>
              </div>
              <div className={styles.memberSocial}>
                <WhatsApp className={styles.icon} />
                <FacebookOutlined className={styles.icon} />
                <X className={styles.icon} />
              </div>
            </div>{" "}
          </div>
        </div>
      </Layout>
    </>
  );
}
export default MeetTheTeam;
