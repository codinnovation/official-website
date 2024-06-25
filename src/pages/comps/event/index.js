import React, {useState, useEffect, useRef} from "react";
import styles from "../../../styles/event.module.css";
import Head from "next/head";
import Layout from "@/pages/layout";
import { db } from "../../../../firebase.config";
import { ref, get, push, set } from "firebase/database";

function Index() {
   const containerHeaderRef = useRef(null)
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
        try {
          const dbRef = ref(db, "events");
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
          <title>COD | Innovations - Events</title>
        </Head>
        <div className={styles.eventContainer}>
          <div className={styles.containerHeader} ref={containerHeaderRef}>
            <h1>Events</h1>
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
                  <span>{data?.Content}</span>
                </div>

                <div className={styles.boxItemButton}>
                  {/* <button>Read More</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Index;
