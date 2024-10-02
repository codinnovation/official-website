import React from "react";
import styles from "../../../styles/gratitude.module.css";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Gratitude() {
  return (
    <>
      <div className={styles.gratitudeContainer}>
        <div className={styles.gratitudeContainerHeader}>
          <h1>Gratitude from a</h1>
          <h1>Learner</h1>
        </div>

        <div className={styles.gratitudeContent}>
          <div className={styles.gratitudeVideo}>
            <Player src="/">
              <ControlBar autoHide={true} />
            </Player>
          </div>

		  <div className={styles.gratitudeVideo}>
            <Player src="/">
              <ControlBar autoHide={true} />
            </Player>
          </div>
        </div>
		<div className={styles.gratitudeButtons}>
          <ArrowBackIcon className={styles.icon} />
          <ArrowForwardIcon className={styles.icon} />
        </div>
      </div>
    </>
  );
}
export default Gratitude;
