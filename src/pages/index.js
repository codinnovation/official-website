import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SupportIcon from "@mui/icons-material/SupportAgent";
import styles from "../styles/Home.module.css";
import HomePage from "./home";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const router = useRouter();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isJoinSocialOpen, setIsJoinSocialOpen] = useState(false);


  

  const handleOpenSupport = () => {
    setIsSupportOpen(true)
  }

  const handleCloseOpenSupport = () => {
    setIsSupportOpen(false)
  }


  const handleOpenSocial = () => {
    setIsJoinSocialOpen(true);
  }

  const handleCloseSocial = () => {
    setIsJoinSocialOpen(false)
  }

  function handleOpenWhatsAppGroup() {
    localStorage.setItem('hasJoinedSocial', 'true');
  }

  function GoToFacebook() {
    localStorage.setItem('hasJoinedSocial', true);
    let facebookURL =
      "https://www.facebook.com/profile.php?id=61559909200927&sk=about";

    window.open(facebookURL, "_blank");
  }

  useEffect(() => {
    const hasJoinedSocial = localStorage.getItem('hasJoinedSocial');
    if (!hasJoinedSocial) {

      const timer = setTimeout(() => {
        handleOpenSocial()
      }, 2000);

      return () => clearTimeout(timer);
    }

  }, []);

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <div>
        <HomePage />
        <div
          className={styles.supportContainer}
          onClick={handleOpenSupport}
        >
          <Tooltip title="support">
            <SupportIcon className={styles.icon} />
          </Tooltip>
        </div>
      </div>

      <Dialog
        open={isSupportOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseOpenSupport}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.contactHeader}>
          <h1>Need Help? Contact Us</h1>
        </div>
        <DialogContent>
          <div className={styles.textContainer}>
            <h1>Email Us</h1>
            <p>codinnovations001@gmail.com</p>
          </div>

          <div className={styles.textContainer}>
            <h1>Call Us</h1>
            <p>+233 597 063 145</p>
          </div>

          <div className={styles.textContainer}>
            <h1>WhatsApp Us</h1>
            <p>+233 500 976 882</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenSupport}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isJoinSocialOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSocial}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.contactHeader}>
          <h1>Join Our Community</h1>
        </div>
        <DialogContent>
          <div className={styles.socialContainer}>
            <button> WhatsApp Group</button>
            <button> WhatsApp Channel</button> 
            <button onClick={GoToFacebook}> Facebook Page</button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSocial}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
