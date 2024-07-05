import React, { useState, useEffect } from "react";
import styles from "../../styles/grow-business.module.css";
import Head from "next/head";

function Index() {
  const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstContent(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Grow Your Business with COD Innovations</title>
        <meta
          name="description"
          content="Grow your business with COD Innovations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-w-2.png" />
      </Head>
      <div className={styles.businessContainer}>
        <div className={styles.backgroundImage}></div>

        {showFirstContent ? (
          <div className={styles.contentContainer}>
            <h1>Grow Your Business With</h1>
            <h1>COD Innovations</h1>
          </div>
        ) : (
          <div className={styles.newContentContainer}>
            <div className={styles.newContentContainerHeader}>
              <h1>
                Limited Time Offer! Grow Your Business with COD Innovations
              </h1>
              <p>
                Get a professional web-based software solution without upfront
                costs!
              </p>
            </div>

            <div className={styles.introductionContainer}>
              <p>
                Are you a small business owner or entrepreneur looking to take
                your business to the next level? Do you need a custom web
                application to streamline your operations, boost efficiency, and
                increase your online presence? Look no further than COD
                Innovations!
              </p>
            </div>

            <div className={styles.offerContainer}>
              <p>
                we are excited to announce a limited time offer that makes it
                easier than even to get the custom web application you need.
                With our pay-as-you-grow model, you can get started without any
                upfront costs. Instead, you will pay a monthly installment until
                the total cost of the project is paid in full. Once you have
                made all the payments, you will become our client and enjoy
                ongoing support and maintenance for your web application.
              </p>

              <ul>
                <h1>Benefits</h1>
                <li>
                  No Financial Risk: You will not have to pay any upfront costs,
                  making it easier to get started
                </li>
                <li>
                  Flexibility: You will pay monthly installments until the
                  project is paid in full, giving you flexibility in your budget
                </li>
                <li>
                  Try Before You Buy: You will get to use the web application
                  for two months after it goes live, and only start paying if
                  you are satisfied with it
                </li>
                <li>
                  Ongoing Support: Once you become out client, you will receive
                  ongoing support and maintenance for your web application
                </li>
                <li>
                  Scalability: Our pay-as-you-grow model means you can scale
                  your web application as your business grows
                </li>
              </ul>
            </div>

            <div className={styles.cta}>
              <button>Let&apos;s Talk</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
