import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home page/top bar.module.css";
import CODLogo from "../../../../public/logo-w-1 (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";

const Bounce = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Bounce),
  {
    ssr: false
  }
);

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

function TopBar() {
  const [openBottomMenu, setOpenBottomMenu] = useState(false);

  return (
    <>
      <Bounce reset>
        <div className={styles.topbarContainer}>
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
                <Link href="/">Services</Link>
                <Link href="/team">Team</Link>
                <Link href="/">Contact</Link>
              </div>

              <div className={styles.navigationButton}>
                <button>Get A Quote</button>
              </div>
            </div>

            <div
              className={styles.menuContainer}
              onClick={() => setOpenBottomMenu(!openBottomMenu)}
            >
              {openBottomMenu ? (
                <CloseIcon className={styles.icon} />
              ) : (
                <MenuIcon className={styles.icon} />
              )}
            </div>
          </div>
        </div>
      </Bounce>

      {openBottomMenu && (
        <div className={styles.menu}>
          <Slide>
            <div className={styles.menuContent}>
              <div className={styles.menuLink}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Services</Link>
                <Link href="/team">Team</Link>
                <Link href="/">Contact</Link>
              </div>

              <div className={styles.menuButton}>
                <button>Get Started</button>
              </div>
            </div>
          </Slide>
        </div>
      )}
    </>
  );
}

export default TopBar;
