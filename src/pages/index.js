import React from "react";
import Head from "next/head";
import Hero_section from "../components/hero_section";

export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome To Cod - Innovations</title>
        <meta name="description" content="Welcome to COD Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-w-1 (1).png" />
      </Head>
      <div className="w-full h-full">
        <Hero_section />
      </div>
    </>
  );
}
