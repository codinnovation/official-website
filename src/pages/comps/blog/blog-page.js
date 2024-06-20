import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/blog-page.module.css";
import Layout from "@/pages/layout";
import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();
  const containerHeaderRef = useRef(null);

  const { data } = router.query;
  const parseData = data ? JSON.parse(data) : null;

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
            <h1>{parseData?.Title}</h1>
          </div>

          <div className={styles.containerItems}>
            {parseData &&
              Object.values(parseData.blogParagraph).map((paragraph, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.itemHeader}>
                    <h1>{paragraph.blogParagraphTitle}</h1>
                  </div>

                  <div className={styles.itemContent}>
                    <p>{paragraph.blogParagraphContent}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogPage;
