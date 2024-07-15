import Head from "next/head";
import { useState, useEffect } from "react";
import Comps from "./comps";
import SupportIcon from "@mui/icons-material/SupportAgent";
import styles from "../styles/Home.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CodInnovationLogo from "../../public/logo-w-1.png";
import EventImage from "../../public/event.png";
import WelcomePage from "../pages/welcome-page";
import PromoImage from "../../public/grow your business with COD innovations.jpg";

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSupportOpen(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstContent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const followLink = () => {
    const url = "https://edu.codinnovations.tech/";
    window.open(url, "_blank");
  };

  const followLinkToEvent = () => {
    const url = "/grow-your-business";
    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <div>
        <Comps />
        <div
          className={styles.supportContainer}
          onClick={() => setIsSupportOpen(true)}
        >
          <SupportIcon className={styles.icon} />
        </div>
      </div>

      {isSupportOpen && (
        <>
          <div className={styles.containerContent}>
            <div
              className={styles.closeIcon}
              onClick={() => setIsSupportOpen(false)}
            >
              <CloseIcon className={styles.icon} />
            </div>
            <div className={styles.containerHeader}>
              <Image
                src={PromoImage}
                alt="event-image"
                className={styles.image}
                width={900}
                height={900}
              />
              <button onClick={followLinkToEvent}>Let&apos;s Talk!</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
