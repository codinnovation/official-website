import React, { useEffect, useState } from "react";
import styles from '../../styles/about.module.css';
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { db } from "../../../firebase.config";
import { get, ref } from "firebase/database";
import CEOImage from "../../../public/img1 (1).png";
import { motion } from "framer-motion";

function Index() {
  const [data, setData] = useState([]);

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

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
      <motion.div
        className={styles.aboutContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ infinity: true }}
        variants={slideInVariant}
      >
        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutTextContainer}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            <div className={styles.aboutTextHeader}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                About
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Us
              </motion.h1>
            </div>

            {data.length === 0 ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              data.map((data, index) => (
                <motion.div
                  className={styles.aboutTextContent}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <p>{data.content}</p>
                </motion.div>
              ))
            )}

            <motion.div
              className={styles.aboutContainerButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>Read more</button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.aboutImageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Image
              src={CEOImage}
              alt="about_img.jpg"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Index;
