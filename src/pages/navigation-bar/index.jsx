import React, { useState } from "react";
import styles from "../../styles/navigation.module.css";
import CODLOGO from "../../../public/logo-2 (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.companyLogo}>
            <Image src={CODLOGO} width={900} height={900} alt="logo" />
            <h1>Innovations</h1>
          </div>

          <div className={styles.linksContainer}>
            <Link href="/">Home</Link>
            <Link href="/who-are-we">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Team</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className={styles.menuIcon} onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon className={styles.icon} />
            ) : (
              <MenuIcon className={styles.icon} />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className={styles.sideMenu}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className={styles.menuLogoContainer}>
            <Image src={CODLOGO} width={100} height={100} alt="logo" />
            <h2>Innovations</h2>
          </div>
          <div className={styles.menuLinks}>
            <Link href="/">Home</Link>
            <Link href="/who-are-we">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Team</Link>
            <Link href="/">Contact</Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
