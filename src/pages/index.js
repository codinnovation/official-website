import React from "react";
import Head from "next/head";
import Hero_section from "../components/hero_section";
import About_us from "../components/about_us";
import Call_to_action from "../components/call_to_action";
import What_we_do_better from "../components/what_we_do_better";
import Recent_blog_post from "../components/recent_blog_post";
import Contact_us from "../components/contact_us";
import Footer from "../components/footer";

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
        <About_us/>
        <Call_to_action/>
        <What_we_do_better/>
        <Recent_blog_post/>
        <Contact_us/>
        <Footer/>
      </div>
    </>
  );
}
