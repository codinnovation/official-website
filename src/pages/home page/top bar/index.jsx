import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home page/top bar.module.css";
import CODLogo from "../../../../public/logo-w-1 (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import { Motion, spring } from "react-motion";

function TopBar() {
  const [isVisible, setIsVisible] = useState(false);
  //update

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Motion defaultStyle={{ x: -200 }} style={{ x: spring(isVisible ? 0 : -200) }}>
      {style => (
        <div
          className={styles.topbarContainer}
          style={{
            transform: `translateX(${style.x}px)`,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          <div className={styles.topbarContent}>
            <div className={styles.companyContainer}>
              <Image src={CODLogo} width={100} height={100} alt="" />
              <div className={styles.companyName}>
                <h1>Innovations</h1>
                <p>COD Innovations</p>
              </div>
            </div>

            <div className={styles.navigationContainer}>
              <div className={styles.linkContainer}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Courses</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Pages</Link>
                <Link href="/">Contact</Link>
              </div>

              <div className={styles.navigationButton}>
                <button>Get A Quote</button>
              </div>
            </div>

            <div className={styles.menuContainer}>
              <MenuIcon className={styles.icon} />
            </div>
          </div>
        </div>
      )}
    </Motion>
  );
}

export default TopBar;
