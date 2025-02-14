import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero_section() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

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

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-[80vh] h-full w-full bg-gradient-to-r from-[#31333f] to-[#1a1c24] relative overflow-hidden 2xl:min-h-[75vh]">
      {/* Navigation Section */}
      <div className={`w-full fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-[#1a1c24]" : ""}`}>
        <motion.div
          className="w-11/12 h-[10vh] mx-auto flex justify-between items-center 2xl:w-8/12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex justify-start items-center space-x-2">
            <motion.h1
              className="text-[#f4f4f5] text-xl font-metropolis-bold 2xl:text-2xl"
              variants={fadeInLeft}
            >
              Cod
            </motion.h1>
            <motion.h1
              className="text-[#f4f4f5] text-xl font-metropolis-bold 2xl:text-2xl"
              variants={fadeInLeft}
            >
              <Typewriter
                options={{
                  strings: ["Innovations"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden justify-end items-center space-x-10 2xl:flex">
            {["Home", "About", "Services", "Team", "Blog", "Contact"].map(
              (text, index) => (
                <motion.div
                  key={text}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInRight}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${text.toLowerCase()}`}
                    className={`${text === "Home"
                      ? "bg-[#ef6603] text-white px-4 py-2 rounded-full flex justify-center items-center font-nexa-light hover:bg-[#ff7b1a] transition-colors duration-300"
                      : "text-white font-nexa-bold text-base hover:text-[#ef6603] transition-colors duration-300"
                      }`}
                  >
                    {text}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex justify-end items-center 2xl:hidden">
            <button onClick={toggleMenu} className="text-[#ef6603]">
              <i className={`ri-${isMenuOpen ? "close-line" : "menu-line"} text-2xl`}></i>
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            className="w-full bg-[#1a1c24] absolute top-[10vh] left-0 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-6">
              {["Home", "About", "Services", "Team", "Blog", "Contact"].map(
                (text, index) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase()}`}
                    className={`text-white font-nexa-bold text-base hover:text-[#ef6603] transition-colors duration-300`}
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Main Content Section */}
      <div className="h-[70vh] w-full flex items-center 2xl:h-[65vh]">
        <motion.div
          className="w-12/12 p-1 mx-auto h-full flex flex-col justify-center items-center gap-6 2xl:gap-10 2xl:w-8/12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex flex-col justify-center items-center space-y-4 text-center 2xl:space-y-6">
            <motion.h1
              className="font-metropolis-bold text-2xl text-white 2xl:text-4xl"
              variants={fadeInLeft}
            >
              Innovation That Connects People and Possibilities
            </motion.h1>

            <motion.div
              className="flex flex-col w-full mx-auto 2xl:w-7/12"
              variants={fadeIn}
            >
              <p className="text-center text-sm text-[#999] font-nexa-bold 2xl:text-base">
                Transforming education, healthcare, and businesses with innovative solutions. At COD Innovations, we harness technology to enhance learning, improve healthcare, and provide tailored services for individuals, businesses, and organizations.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <button className="border-2 border-[#ef6603] px-6 py-3 rounded-full text-white font-metropolis-light hover:bg-[#ef6603] hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1350 290"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#ef6603", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ff7b1a", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero_section;