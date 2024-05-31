import React, { useEffect, useState } from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import CodInnovationsLogo from '../../../../public/logo-w-2.png'


function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "about_us");
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
        <div className={styles.container_items}>
          <div className={styles.left_items}>
            <div className={styles.left_items_header}>
              <h1>About Us</h1>
            </div>

            {data.length === 0 ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              data.map((data, index) => (
                <div className={styles.left_items_text} key={index}>
                  <p>{data.content}</p>
                </div>
              ))
            )}

            <div className={styles.left_items_button}>
              <button>Read more</button>
            </div>
          </div>

          <div className={styles.right_items}>
            <Image
              src={CodInnovationsLogo}
              alt="about_img.jpg"
              width={500}
              height={500}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
