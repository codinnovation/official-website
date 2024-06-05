import React, { useEffect, useState } from "react";
import styles from "../../../styles/showcase.module.css";
import Image from "next/image";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useRouter } from "next/router";

function Showcase() {
  const [data, setData] = useState([]);
  const router = useRouter()
  const [isScroll, setIsScroll] = useState(false);

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
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseItemsContainer}>
          <div className={styles.heroSection}>
            <div className={styles.heroHeader}>
              <h1>Welcome To Cod Innovations</h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Welcome to COD Innovations, where we blend courage, obedience,
                and discipline to challenge the status, pursue groundbreaking
                ideas, and consistently deliver exceptional results, shaping the
                future of innovation
              </p>
            </div>

            <div className={styles.heroButtonContainer}>
              <div className={styles.contactButton}>
                <button onClick={() => router.push("/comps/contact")}> Contact Us</button>
              </div>
              <div className={styles.watchButton}>
                <PlayCircleIcon className={styles.playIcon} />
                <span>Watch Now</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/hero-img.svg"
              width={600}
              height={600}
              alt="showase imag"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;