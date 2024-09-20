import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/team.module.css'
import Layout from "@/pages/layout";
import Image from "next/image";
import CEOPhoto from "../../../public/img1 (1).png";
import PhoneIcon from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";
import X from "@mui/icons-material/X";
import Popover from "@mui/material/Popover";
import Head from "next/head";

function Index() {
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
      <Head>
        <title>COD | Innovations - Our Team</title>
        <meta
          name="description"
          content="Welcome to COD Innovations - Our Team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.containerHeader} ref={containerHeaderRef}>
            <h1>Meet Our Amazing Team</h1>
          </div>

          <div className={styles.containerItems}>
            <div className={styles.item}>
              <Image
                src={CEOPhoto}
                width={500}
                height={500}
                alt="team_photo"
                className={styles.img}
              />

              <div className={styles.itemDetails}>
                <div className={styles.itemDetailsOne}>
                  <h1>Kwabena Asumadu</h1>
                  <span>CEO & Founder</span>
                </div>
                <div className={styles.itemDetailsTwo}>
                  <Email className={styles.icon} />
                  <PhoneIcon className={styles.icon} />
                  <X className={styles.icon} />
                  <WhatsApp className={styles.icon} />
                </div>
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
            Viewing Team Page
          </p>
        </Popover>
      </Layout>
    </>
  );
}

export default Index;
