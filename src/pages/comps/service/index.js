import React, { useEffect, useState } from "react";
import styles from "../../../styles/service.module.css";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

function Index() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "services");
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
      <div className={styles.serviceContainer}>
        <div className={styles.serviceHeader}>
          <h1>Our services</h1>
        </div>

        <div className={styles.serviceItemsContainer}>
          {data.length === 0 ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            data.slice(0,3).map((item, index) => (
              <div className={styles.serviceItem} key={index}>
                <div className={styles.serviceItemIcon}>
                  <RecordVoiceOverIcon className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceItemHeader}>
                  <h1>{item.title}</h1>
                </div>
                <div className={styles.serviceItemText}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div
          className={styles.serviceButtonContainer}
          onClick={() => router.push("/comps/service/service")}
        >
          <button>View More</button>
        </div>
      </div>
    </>
  );
}

export default Index;