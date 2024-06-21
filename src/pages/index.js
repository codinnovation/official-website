import Head from "next/head";
import { useState } from "react";
import Comps from "./comps";
import SupportIcon from "@mui/icons-material/SupportAgent";
import styles from "../styles/Home.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CodInnovationLogo from "../../public/logo-w-1.png";
import EventImage from "../../public/event.png";

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(true);

  const followLink = () => {
    const url = "https://edu.codinnovations.tech/";
    window.open(url, "_blank");
  };

  const followLinkToEvent = () => {
    const url = "https://forms.gle/qbyVuFAJybHp6mYZ9";
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
          className={styles.support_container}
          onClick={() => setIsSupportOpen(true)}
        >
          <SupportIcon className={styles.icon} />
        </div>
      </div>

      {isSupportOpen && (
        <>
          <div className={styles.container}>
            <div
              className={styles.container_close}
              onClick={() => setIsSupportOpen(false)}
            >
              <CloseIcon className={styles.icon} />
            </div>
            <div className={styles.container_header}>
              <Image
                src={EventImage}
                alt="event-image"
                className={styles.image}
              />
              <button onClick={followLinkToEvent}>Register Now!</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
