import React from "react";
import styles from "../../styles/welcome.module.css";
import Image from "next/image";
import Logo from "../../../public/logo-w-2.png";

function Index() {
  return (
    <>
      <div className={styles.welcomeContainer}>
        <div className={styles.backgroundImage}>
          <Image
            src={Logo}
            alt="company-logo"
            
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
