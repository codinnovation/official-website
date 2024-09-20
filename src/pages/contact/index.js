import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/contact.module.css'
import Layout from "@/pages/layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import CodInnovationImage from "../../../public/logo-w-2.png";
import Popover from "@mui/material/Popover";
import Head from "next/head";

function Iindex() {
  const [open, setOpen] = useState(false);
  const containerHeaderRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 100);

    setTimeout(() => {
      handleClose();
    }, 1700);
  }, []);

  useEffect(() => {
    if (containerHeaderRef.current) {
      containerHeaderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>COD | Innovations - Contact Us</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.containerHeader} ref={containerHeaderRef}>
            <h1>Contact Us</h1>
          </div>

          <div className={styles.contactContainer}>
            <div className={styles.contactContainerItems}>
              <div className={styles.containerOne}>
                <div className={styles.containerOneItems}>
                  <div className={styles.item}>
                    <LocationOnIcon className={styles.icon} />
                    <h1>Location</h1>
                    <span>Kumasi, Ghana</span>
                  </div>

                  <div className={styles.item}>
                    <LocalPhoneIcon className={styles.icon} />
                    <h1>Phone</h1>
                    <span>+233 5970 63145</span>
                  </div>

                  <div className={styles.item}>
                    <EmailIcon className={styles.icon} />
                    <h1>Email</h1>
                    <span>codinnovations@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <WhatsApp className={styles.icon} />
                    <h1>WhatsApp</h1>
                    <span>+233 597 063 145</span>
                  </div>
                </div>
              </div>

              <div className={styles.containerTwo}>
                <Image
                  src={CodInnovationImage}
                  width={500}
                  height={500}
                  alt="codinnovation"
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>

        <Popover
          anchorReference="anchorPosition"
          open={open}
          onClose={handleClose}
          anchorPosition={{ top: 160, left: 20 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              padding: "10px",
              backgroundColor: "#f85a40",
              color: "#fff",
            }}
          >
            Viewing Contact Page
          </p>
        </Popover>
      </Layout>
    </>
  );
}

export default Iindex;
