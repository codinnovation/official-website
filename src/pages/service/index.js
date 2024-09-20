import React, { useEffect, useState } from "react";
import styles from '../../styles/service.module.css';
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { get, ref } from "firebase/database";
import { db } from "../../../firebase.config";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <>
      <motion.div
        className={styles.serviceContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ infinity: true }}
        variants={slideInVariant}
      >
        <motion.div
          className={styles.serviceHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ infinity: true }}
          variants={fadeInVariant}
        >
          <h1>Our</h1>
          <h1>services</h1>
        </motion.div>

        <motion.div
          className={styles.serviceContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ infinity: true }}
          variants={fadeInVariant}
        >
          {data.length === 0 ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            data.slice(0, 3).map((item, index) => (
              <motion.div
                className={styles.service}
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ infinity: true }}
                variants={fadeInVariant}
              >
                <div className={styles.serviceIcon}>
                  <RecordVoiceOverIcon className={styles.icon} />
                </div>
                <div className={styles.serviceTitle}>
                  <h1>{item.title}</h1>
                </div>
                <div className={styles.serviceDescription}>
                  <p>{item.content}</p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div
          className={styles.serviceContainerButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/comps/service/service")}
        >
          <button>View More</button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
