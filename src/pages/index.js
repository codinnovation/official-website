import React, { useEffect, useState } from "react";
import Head from "next/head";
import HomePage from '../pages/home-page'

export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_ADSENSE_ID} />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
