import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../layout";
import styles from "../../styles/team.module.css";
import TEAM1 from "../../../public/img1 (3).png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
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
        <title>Welcome To Cod - Team</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <Layout>
        <div className={styles.teamContainer} ref={aboutHeaderRef}>
          <div className={styles.teamContainerHeader}>
            <h1>The Team</h1>
          </div>

          <div className={styles.teamContent}>
            <div className={styles.teamBox}>
              <div className={styles.teamPhoto}>
                <Image src={TEAM1} width={900} height={900} alt="" />
              </div>

              <div className={styles.teamDescription}>
                <div className={styles.teamName}>
                  <h1>Kwabena Asumadu</h1>
                </div>

                <div className={styles.teamRole}>
                  <p>CEO & Founder, Software Engineer</p>
                </div>

                <div className={styles.teamRoleDescription}>
                  <p>
                    Kwabena is the CEO and Founder of COD Innovations, where he
                    leads a talented team of developers. As a skilled software
                    engineer, he is dedicated to creating innovative solutions
                    that empower users and drive growth. His passion for
                    technology and commitment to excellence inspire those around
                    him.
                  </p>
                </div>

                <div className={styles.socialHandles}>
                  <WhatsAppIcon
                    className={styles.icon}
                    onClick={GoToWhatsApp}
                  />
                  <FacebookIcon
                    className={styles.icon}
                    onClick={GoToFacebook}
                  />
                  <InstagramIcon className={styles.icon} />
                  <LinkedInIcon className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Team;
