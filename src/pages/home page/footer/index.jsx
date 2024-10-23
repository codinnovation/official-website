import React from "react";
import Image from "next/image";
import styles from "../../../styles/home page/footer.module.css";
import CODLogo from "../../../../public/logo-w-1 (1).png";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Slide),
  {
    ssr: false
  }
);

function Footer() {
  return (
    <>
      <Slide direction="top">
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.sectionOne}>
              <div className={styles.header}>
                <Image src={CODLogo} width={900} height={900} alt="" />
                <h1>Innovations</h1>
              </div>

              <div className={styles.description}>
                <p>
                  At the intersection of courage, discipline, and obedience, we
                  unlock innovative possibilities that drive industries forward,
                  creating new opportunities for growth and transformation
                </p>
              </div>
            </div>

            <div className={styles.sectionTwo}>
              <div className={styles.header}>
                <h1>Newsletter</h1>
              </div>

              <div className={styles.description}>
                <p>
                  Stay updated with our latest trends Seed heaven so said place
                  winged over given forth fruit.
                </p>
              </div>

              <div className={styles.button}>
                <button>Click to Join</button>
              </div>
            </div>

            <div className={styles.sectionThree}>
              <div className={styles.header}>
                <h1>Contact Us</h1>
              </div>

              <div className={styles.contact}>
                <h1>Phone : </h1>
                <p>+233 597 063 145</p>
              </div>

              <div className={styles.contact}>
                <h1>Email : </h1>
                <p>codinnovations001@gmail.com</p>
              </div>

              <div className={styles.contact}>
                <h1>Website : </h1>
                <p>https://www.codinnovations.tech</p>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>
              © {new Date().getFullYear()}. COD Innovations. All Rights Reserved
            </p>{" "}
          </div>
        </div>
      </Slide>
    </>
  );
}
export default Footer;
