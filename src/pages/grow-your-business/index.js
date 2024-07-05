import React from "react";
import styles from "../../styles/grow-business.module.css";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Grow Your Business with COD Innovations</title>
        <meta
          name="description"
          content="Grow your business with COD Innovations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <div className={styles.businessContainer}>
        <div className={styles.backgroundImage}></div>

        <div className={styles.contentContainer}>
          <h1>Grow Your Business With</h1>
          <h1>COD Innovations</h1>
        </div>
      </div>
    </>
  );
}

export default Index;
