import React, { useEffect, useState } from "react";
import styles from "../../../styles/glance.module.css";
import Image from "next/image";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import GlanceImage from "../../../../public/showcase1.png";

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "glance");
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
      <div className={styles.glanceContainer}>
        <div className={styles.glanceItemsContainer}>
          <div className={styles.glanceLeftItems}>
            <Image
              src={GlanceImage}
              width={500}
              height={500}
              alt="img"
              className={styles.glanceImage}
            />
          </div>
          {data.length === 0 ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            data.map((item, index) => (
              <div className={styles.glanceRightItems} key={index}>
                <div className={styles.glanceRightItemsHeader}>
                  <h1>{item.title}</h1>
                </div>
                <div className={styles.glanceRightItemsText}>
                  <p>{item.content}</p>
                </div>

                <div className={styles.glanceRightItemsButton}>
                  <button>Read more</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Index;