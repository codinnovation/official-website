import React from "react";
import { motion } from "framer-motion";
import Hero_section from "../components/hero_section";
import Head from 'next/head'
import Image from "next/image";

function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
     <Head>
        <title>Welcome To Cod - Innovations | About Us</title>
        <meta name="description" content="Welcome to COD Innovations - About us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-6941452448672457"/>
        <link rel="icon" href="/logo-w-1 (1).png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6941452448672457"
     crossOrigin="anonymous"></script>
      </Head>
    <Hero_section/>
      <div className="min-h-screen w-full bg-[#f8f9fa] py-16">
        <div className="w-8/12 mx-auto">

          {/* Section 1: Who We Are */}
          <motion.div
            className="flex flex-col justify-center items-start space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#1a1c24] font-metropolis-bold uppercase text-xl">
              Who We Are
            </h1>
            <div className="bg-[#ef6603] w-20 h-1 rounded-full"></div>
            <motion.p
              className="text-[#4a4a4a] font-nexa-light"
              variants={fadeInLeft}
            >
              At Cod Innovations, we are a team of passionate innovators dedicated to transforming industries through cutting-edge technology. Founded in 2015, we have grown from a small startup to a global leader in technology solutions. Our team consists of experts in software development, artificial intelligence, data science, and user experience design, all working together to create impactful solutions.
            </motion.p>
          </motion.div>

          {/* Section 2: Our Mission */}
          <motion.div
            className="mt-20 flex flex-col justify-center items-start space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#1a1c24] font-metropolis-bold uppercase text-xl">
              Our Mission
            </h1>
            <div className="bg-[#ef6603] w-20 h-1 rounded-full"></div>
            <motion.p
              className="text-[#4a4a4a] font-nexa-light"
              variants={fadeInLeft}
            >
              Our mission is to create innovative solutions that solve real-world problems. We strive to make technology accessible, intuitive, and impactful for everyone. Whether it&apos;s through education, healthcare, or business, we aim to empower individuals and organizations to achieve their full potential.
            </motion.p>
          </motion.div>

          {/* Section 3: Our Values */}
          <motion.div
            className="mt-20 flex flex-col justify-center items-start space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#1a1c24] font-metropolis-bold uppercase text-xl">
              Our Values
            </h1>
            <div className="bg-[#ef6603] w-20 h-1 rounded-full"></div>
            <div className="grid grid-cols-3 gap-10">
              {[
                {
                  title: "Courage",
                  description: "We embrace challenges and take bold steps to innovate and solve complex problems. Courage drives us to explore uncharted territories and push the boundaries of what's possible.",
                },
                {
                  title: "Obedience",
                  description: "We are committed to following ethical practices and adhering to the highest standards of professionalism. Obedience ensures that we remain accountable and trustworthy in all our endeavors.",
                },
                {
                  title: "Discipline",
                  description: "Discipline is the foundation of our success. We maintain focus, consistency, and dedication in delivering high-quality solutions that meet and exceed expectations.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex flex-col space-y-4"
                  variants={fadeInRight}
                  transition={{ delay: index * 0.2 }}
                >
                  <h2 className="text-[#1a1c24] font-metropolis-bold text-lg">
                    {value.title}
                  </h2>
                  <p className="text-[#4a4a4a] font-nexa-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Our Team */}
          <motion.div
            className="mt-20 flex flex-col justify-center items-start space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#1a1c24] font-metropolis-bold uppercase text-xl">
              Our Team
            </h1>
            <div className="bg-[#ef6603] w-20 h-1 rounded-full"></div>
            <div className="grid grid-cols-3 gap-10">
              {[
                {
                  name: "John Doe",
                  role: "CEO & Founder",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Alice Johnson",
                  role: "Lead Designer",
                  image: "https://via.placeholder.com/150",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col space-y-4"
                  variants={fadeInRight}
                  transition={{ delay: index * 0.2 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg"
                    width={900} height={900}
                  />
                  <h2 className="text-[#1a1c24] font-metropolis-bold text-lg">
                    {member.name}
                  </h2>
                  <p className="text-[#4a4a4a] font-nexa-light">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 5: Our Achievements */}
          <motion.div
            className="mt-20 flex flex-col justify-center items-start space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#1a1c24] font-metropolis-bold uppercase text-xl">
              Our Achievements
            </h1>
            <div className="bg-[#ef6603] w-20 h-1 rounded-full"></div>
            <div className="grid grid-cols-3 gap-10">
              {[
                {
                  title: "500+ Projects",
                  description: "We have successfully delivered over 500 projects across various industries, each tailored to meet the unique needs of our clients.",
                },
                {
                  title: "Global Reach",
                  description: "Our solutions have reached clients in over 30 countries, making us a trusted partner for businesses worldwide.",
                },
                {
                  title: "Awards & Recognition",
                  description: "We have been recognized with numerous awards for our innovative solutions and commitment to excellence.",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="flex flex-col space-y-4"
                  variants={fadeInRight}
                  transition={{ delay: index * 0.2 }}
                >
                  <h2 className="text-[#1a1c24] font-metropolis-bold text-lg">
                    {achievement.title}
                  </h2>
                  <p className="text-[#4a4a4a] font-nexa-light">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;