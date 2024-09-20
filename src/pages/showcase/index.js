import React, { useEffect, useState, useContext } from "react";
import styles from '../../styles/showcase.module.css';
import Image from "next/image";
import { db } from "../../../firebase.config";
import { get, ref } from "firebase/database";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useRouter } from "next/router";
import { HeroContext } from "../context/heroContext";
import { motion } from "framer-motion";

function Showcase() {
  const {
    setHeroHeader,
    heroHeader,
    heroDescription,
    setHeroDescription,
  } = useContext(HeroContext);

  const [data, setData] = useState([]);
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  const slideInVariant = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };


  useEffect(() => {
    setHeroHeader("Welcome To COD Innovations");
  }, [setHeroHeader]);

  useEffect(() => {
    setHeroDescription(
      "Welcome to COD Innovations, where we blend courage, obedience, and discipline to challenge the status quo, pursue groundbreaking ideas, and consistently deliver exceptional results, shaping the future of innovation."
    );
  }, [setHeroDescription]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "showcase");
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className={styles.showcaseContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ infinity: true }}
        variants={slideInVariant}
      >
        <motion.div
          className={styles.showcaseItemsContainer}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.heroSection}>
            <motion.div
              className={styles.heroHeader}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1>{heroHeader}</h1>
            </motion.div>

            <motion.div
              className={styles.heroDescription}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <p>{heroDescription}</p>
            </motion.div>

            <motion.div
              className={styles.heroButtonContainer}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className={styles.contactButton}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => router.push("/comps/contact")}
                >
                  Contact Us
                </motion.button>
              </div>
              <div className={styles.watchButton}>
                <PlayCircleIcon className={styles.playIcon} />
                <span>Watch Now</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src='/hero-img.svg'
              width={900}
              height={900}
              alt="showcase image"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Showcase;
