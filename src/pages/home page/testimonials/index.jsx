import React from "react";
import styles from "../../../styles/home page/testimonials.module.css";
import Image from "next/image";
import ClientImage from "../../../../public/harriet.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import dynamic from "next/dynamic";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Bounce = dynamic(
  () => import("react-awesome-reveal").then((mod) => mod.Bounce),
  {
    ssr: false
  }
);

function Testimonial() {
  return (
    <>
      <Bounce>
        <div className={styles.testimonialContainer}>
          <div className={styles.header}>
            <hr />
            <h1>Testimonials</h1>
          </div>
          <div className={styles.testimonialContent}>
            <div className={styles.box}>
              <div className={styles.boxImage}>
                <Image src={ClientImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.boxName}>
                <h1>Yeboah Harriet</h1>
              </div>

              <div className={styles.message}>
                <p>
                  I just want to take a moment to express my gratitude to COD
                  Innovations team. I wanted to learn how to build websites, and
                  even though I am not from the IT field, they stepped in to
                  help me. The good news is that I did not pay a single cent for
                  their support .I am truly thankful for everything they&apos;ve
                  done for me
                </p>
              </div>

              <div className={styles.star}>
                <StarRateIcon className={styles.icon} />
                <StarRateIcon className={styles.icon} />
                <StarRateIcon className={styles.icon} />
                <StarRateIcon className={styles.icon} />
                <StarRateIcon className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <ArrowLeftIcon className={styles.icon} />
            <ArrowRightIcon className={styles.icon} />
          </div>
        </div>
      </Bounce>
    </>
  );
}
export default Testimonial;
