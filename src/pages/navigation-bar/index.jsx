import React, { useState } from "react";
import styles from "../../styles/navigation.module.css";
import CODLOGO from "../../../public/logo-2 (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

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
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Services</Link>
            <Link href="">Team</Link>
            <Link href="">Contact</Link>
          </div>

          <div className={styles.menuIcon}>
            <MenuIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
