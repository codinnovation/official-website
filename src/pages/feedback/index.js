import React, { useEffect, useState } from "react";
import styles from '../../styles/feedback.module.css'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { db } from "../../../firebase.config";
import { get, ref } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "feedback");
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
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>What our clients say</h1>
        </div>

        {data.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
              color:"#008374",
            }}
          >
            <CircularProgress />
            <em>Oops!!!</em>
          </Box>
        ) : (
          data.map((item, index) => (
            <div className={styles.container_items} key={index}>
              <div className={styles.container_item}></div>
              <div className={styles.container_item}></div>
            </div>
          ))
        )}

        <div className={styles.container_button}>
          <ArrowBackIcon className={styles.icon} />
          <ArrowForwardIcon className={styles.icon} />
        </div>
      </div>
    </>
  );
}

export default Index;
