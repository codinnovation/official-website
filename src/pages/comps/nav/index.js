import React, { useState } from "react";
import styles from "../../../styles/nav.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcoon from "@mui/icons-material/Close";
import Image from "next/image";
import LogoImage from "../../../../public/logo-2.png";
import MenuLogoImage from "../../../../public/logo-w-2.png";

function Index() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_1}>
            <Image
              src={LogoImage}
              width={180}
              height={180}
              alt="cod_innovation"
              className={styles.logo}
            />
          </div>

          <div className={styles.container_2}>
            <Link href="/" className={styles.lnk}>
              Home
            </Link>
            <Link href="/comps/about-us/about" className={styles.lnk}>
              About
            </Link>
            <Link href="/comps/service/service" className={styles.lnk}>
              Services
            </Link>
            <Link href="/comps/team/" className={styles.lnk}>
              Team
            </Link>
            <Link href="/comps/softwares" className={styles.lnk}>
              Softwares
            </Link>
            <Link href="/comps/blog" className={styles.lnk}>
              Blog
            </Link>
            <Link href="/comps/contact/" className={styles.lnk}>
              Contact
            </Link>
          </div>

          <div className={styles.container_3}>
            {openMenu ? (
              <CloseIcoon className={styles.MenuIcon} onClick={toggleMenu} />
            ) : (
              <MenuIcon className={styles.MenuIcon} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {openMenu && (
        <>
          <div className={styles.menuContainer}>
            <div className={styles.menuContainerLogo}>
              <Image
                src={MenuLogoImage}
                width={170}
                height={170}
                alt="cod_innovation"
                className={styles.logo}
              />
            </div>

            <div className={styles.menuContainerLinks}>
              <Link href="/" className={styles.lnk}>
                Home
              </Link>
              <Link href="/comps/about-us/about" className={styles.lnk}>
                About
              </Link>
              <Link href="/comps/service/service" className={styles.lnk}>
                Services
              </Link>
              <Link href="/comps/team" className={styles.lnk}>
                Team
              </Link>
              <Link href="/comps/softwares" className={styles.lnk}>
                Softwares
              </Link>
              <Link href="/comps/blog" className={styles.lnk}>
              Blog
            </Link>
              <Link href="/comps/contact/" className={styles.lnk}>
                Contact
              </Link>
            </div>

            <div className={styles.menuContainerFooter}>
              <p>&copy; 2024 All Rights Reserved By Cod Innovations</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Index;
