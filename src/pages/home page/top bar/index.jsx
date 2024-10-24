import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home page/top bar.module.css";
import CODLogo from "../../../../public/logo-w-1 (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

function TopBar() {
  const router = useRouter();
  const [openBottomMenu, setOpenBottomMenu] = useState(false);

  const getActiveClass = (path) => {
    return router.pathname === path ? styles.activeLink : "";
  };

  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarContent}>
          <div className={styles.companyContainer}>
            <Image src={CODLogo} width={90} height={90} alt="" />
            <div className={styles.companyName}>
              <h1>Innovations</h1>
              <p>COD Innovations</p>
            </div>
          </div>

          <div className={styles.navigationContainer}>
            <div className={styles.linkContainer}>
              <Link href="/" legacyBehavior>
                <a className={getActiveClass("/")}>Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className={getActiveClass("/about")}>About</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className={getActiveClass("/services")}>Services</a>
              </Link>
              <Link href="/team" legacyBehavior>
                <a className={getActiveClass("/team")}>Team</a>
              </Link>
              <Link href="/portfolio" legacyBehavior>
                <a className={getActiveClass("/portfolio")}>Portfolio</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className={getActiveClass("/contact")}>Contact</a>
              </Link>
            </div>

            <div className={styles.navigationButton}>
              <button>Contact Us</button>
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

      {openBottomMenu && (
        <div className={styles.menu}>
          <Slide>
            <div className={styles.menuContent}>
              <div className={styles.menuLink}>
                <Link href="/" legacyBehavior>
                  <a className={getActiveClass("/")}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a className={getActiveClass("/about")}>About</a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a className={getActiveClass("/services")}>Services</a>
                </Link>
                <Link href="/team" legacyBehavior>
                  <a className={getActiveClass("/team")}>Team</a>
                </Link>
                <Link href="/portfolio" legacyBehavior>
                  <a className={getActiveClass("/portfolio")}>Portfolio</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className={getActiveClass("/contact")}>Contact</a>
                </Link>
              </div>

              <div className={styles.menuButton}>
                <button>Contact Us</button>
              </div>
            </div>
          </Slide>
        </div>
      )}
    </>
  );
}

export default TopBar;
