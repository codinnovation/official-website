import React, { useState, useEffect, useRef, useContext } from "react";
import Layout from "@/pages/layout";
import styles from "../../../styles/about/about.module.css";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import CodInnovationsLogo from "../../../../public/logo-w-2.png";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import Head from "next/head";
import { HeroContext } from "@/pages/context/heroContext";

function About() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const containerHeaderRef = useRef(null);

  const {
    setHeroHeader,
    heroHeader,
    heroDescription,
    setHeroDescription,
    heroImage,
    setHeroImage,
  } = useContext(HeroContext);

  useEffect(() => {
    setHeroImage("/img1 (3).png");
  }, [heroImage, setHeroImage]);

  useEffect(() => {
    setHeroHeader("Who We Are");
  }, [setHeroHeader, heroHeader]);

  useEffect(() => {
    setHeroDescription(
      "Welcome to COD Innovations, where we blend courage, obedience, and discipline to challenge the status, pursue groundbreaking ideas, and consistently deliver exceptional results, shaping the future of innovation."
    );
  }, [heroDescription, setHeroDescription]);

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

  useEffect(() => {
    if (containerHeaderRef.current) {
      containerHeaderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>COD | Innovations - About Us</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>About Us</h1>
          </div>

          <div className={styles.containerItems}>
            <div className={styles.containerOne}>
              {data.length === 0 ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                data.map((data, index) => (
                  <div className={styles.leftItems} key={index}>
                    <p>{data.content}</p>
                  </div>
                ))
              )}
            </div>

            <div className={styles.rightItems}>
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
            Viewing About Page
          </p>
        </Popover>
      </Layout>
    </>
  );
}

export default About;
