import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/terms&condition.module.css";
import Layout from "../layout";
import { HeroContext } from "../context/heroContext";

function Index() {
  const { setHeroHeader, heroHeader } = useContext(HeroContext);

  useEffect(() => {
    setHeroHeader("Terms and Conditions");
  }, [setHeroHeader, heroHeader])

  return (
    <>
      <Layout>
        <div className={styles.termsCondition}></div>
      </Layout>
    </>
  );
}

export default Index;
