import React, { useState } from "react";
import styles from "../../../styles/nav.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import LogoImage from "../../../../public/logo-2.png";
import MenuLogoImage from "../../../../public/logo-w-2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navItemsContainer}>
          <div className={styles.logoContainer}>
            <Image
              src={LogoImage}
              width={900}
              height={900}
              alt="cod_innovation"
              className={styles.logo}
            />
          </div>

          <div className={styles.navLinksContainer}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/comps/about-us/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/comps/service/service" className={styles.navLink}>
              Services
            </Link>
            <Link href="/comps/team/" className={styles.navLink}>
              Team
            </Link>
            <Link href="/comps/softwares" className={styles.navLink}>
              Softwares
            </Link>
            <Link href="/comps/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/comps/contact/" className={styles.navLink}>
              Contact
            </Link>
          </div>

          <div className={styles.menuIconContainer}>
            {menuOpen ? (
              <CloseIcon className={styles.menuIcon} onClick={toggleMenu} />
            ) : (
              <MenuIcon className={styles.menuIcon} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className={styles.menuContainer}>
            <div className={styles.menuLogoContainer}>
              <Image
                src={MenuLogoImage}
                width={170}
                height={170}
                alt="cod_innovation"
                className={styles.logo}
              />
            </div>

            <div className={styles.menuLinksContainer}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/comps/about-us/about" className={styles.navLink}>
                About
              </Link>
              <Link href="/comps/service/service" className={styles.navLink}>
                Services
              </Link>
              <Link href="/comps/team" className={styles.navLink}>
                Team
              </Link>
              <Link href="/comps/softwares" className={styles.navLink}>
                Softwares
              </Link>
              <Link href="/comps/blog" className={styles.navLink}>
                Blog
              </Link>
              <Link href="/comps/contact/" className={styles.navLink}>
                Contact
              </Link>
            </div>

            <div className={styles.menuFooterContainer}>
              <p>&copy; 2024 All Rights Reserved By Cod Innovations</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;