import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/pages/layout";
import styles from "../../../styles/softwares.module.css";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";

function Index() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

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
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "softwares");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setData(dataArray);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Cod | Innovations - services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Available Resources</h1>
          </div>

          <div className={styles.containerItems}>
            {data.length === 0 ? (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Box>
            ) : (
              data.map((item, index) => (
                <div className={styles.containerItem} key={index}>
                  <div className={styles.container_item_icon}>
                    <RecordVoiceOverIcon className={styles.icon} />
                  </div>
                  <div className={styles.container_item_header}>
                    <h1>{item.title}</h1>
                  </div>
                  <div className={styles.container_item_text}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))
            )}
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
            Viewing Softwares Page
          </p>
        </Popover>
      </Layout>
    </>
  );
}

export default Index;
