import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/home page/glance.module.css";

function Glance() {
  const [teamCount, setTeamCount] = useState(0);
  const [allStudentsCount, setAllStudentsCount] = useState(0);
  const [onlineStudentsCount, setOnlineStudentsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const glanceRef = useRef(null);
  const countUp = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(Math.ceil(start));
      }
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          countUp(3, setTeamCount);
          countUp(15, setAllStudentsCount);
          countUp(50, setOnlineStudentsCount);
          countUp(2, setClientsCount);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3
      }
    );

    if (glanceRef.current) {
      observer.observe(glanceRef.current);
    }

    return () => {
      if (glanceRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(glanceRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className={styles.glanceContainer} ref={glanceRef}>
      <div className={styles.glanceContent}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1>{teamCount}</h1>
          </div>
          <hr />
          <div className={styles.sectionDescription}>
            <p>The Team</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1>{allStudentsCount}</h1>
          </div>
          <hr />
          <div className={styles.sectionDescription}>
            <p>All Students</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1>{onlineStudentsCount}</h1>
          </div>
          <hr />
          <div className={styles.sectionDescription}>
            <p>Online Students</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1>{clientsCount}</h1>
          </div>
          <hr />
          <div className={styles.sectionDescription}>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glance;
