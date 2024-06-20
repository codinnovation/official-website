import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/blog.module.css";
import Layout from "@/pages/layout";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../../../firebase.config";
import { get, ref } from "firebase/database";
import { useRouter } from "next/router";

function Index() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const containerHeaderRef = useRef(null)
  const router = useRouter();

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
        const dbRef = ref(db, "blog");
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

  function goToBlog(data) {
    router.push({
      pathname: "/comps/blog/blog-page",
      query: { data: JSON.stringify(data) },
    });
  }

  useEffect(() => {
    if (containerHeaderRef.current) {
      containerHeaderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.containerHeader} ref={containerHeaderRef}>
            <h1>Our Blog</h1>
            <span>Technology-related Blogs</span>
          </div>

          <div className={styles.containerItems}>
            {data.map((data, index) => (
              <div className={styles.boxItem} key={index}>
                <div className={styles.boxItemImage}>
                  {/* <Image
                    src={data?.ImageUrl}
                    width={300}
                    height={300}
                    alt="blog_image"
                    className={styles.blogImage}
                  /> */}
                </div>

                <div className={styles.boxItemHeader}>
                  <h1>{data?.Title}</h1>
                </div>

                <div className={styles.boxItemDescription}>
                  <span>{data.Content}</span>
                </div>

                <div className={styles.boxItemButton}>
                  <button onClick={() => goToBlog(data)}>Read More</button>
                </div>
              </div>
            ))}
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
            Viewing Blog Page
          </p>
        </Popover>
      </Layout>
    </>
  );
}

export default Index;
