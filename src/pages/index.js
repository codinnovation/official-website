import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import SupportIcon from "@mui/icons-material/SupportAgent";
import styles from "../styles/Home.module.css";
import NavigationBar from './navigation-bar';
import Showcase from "./showcase";
import AfterShowcase from '../pages/after-showcase';
import About from '../pages/about-us';
import Service from '../pages/service';
import Feedback from '../pages/feedback';
import Footer from '../pages/footer'
import Topbar from "./top-bar";
import Gratitude from "./gratitude-from-learner";
import CompanyStatus from "./company-status";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [showFirstContent, setShowFirstContent] = useState(true);

  const handleOpenSupport = () => {
    setIsSupportOpen(true)
  }

  const handleCloseOpenSupport = () => {
    setIsSupportOpen(false)
  }



  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <div>
        <Topbar />
        <NavigationBar />
        <Showcase />
        <AfterShowcase />
        <About />
        <Service />
        <CompanyStatus />
        <Feedback />
        <Gratitude/>
        <Footer />
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
        <DialogTitle>{"Contact Us"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Call Us: +233 597 063 145
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            WhatsApp Us: +233 500 976 882
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Email Us: codinnovations001@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenSupport}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
