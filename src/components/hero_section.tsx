import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

function Hero_section() {
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
    <div className="min-h-[75vh] h-full w-full bg-[#31333f]">
      <motion.div
        className="w-8/12 h-[10vh] mx-auto flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-[#f4f4f5] text-2xl font-metropolis-bold"
          variants={fadeInLeft}
        >
          Cod Innovations
        </motion.h1>

        <div className="flex justify-end items-center space-x-10">
          {["Home", "About", "Services", "Team", "Blog", "Con tact"].map(
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
                  className={`${
                    text === "Home"
                      ? "bg-[#ef6603] text-white p-2 w-[90px] h-[40px] rounded-3xl flex justify-center items-center font-nexa-light"
                      : "text-white font-nexa-bold text-base"
                  }`}
                >
                  {text}
                </Link>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      <div className="h-[65vh] w-full">
        <motion.div
          className="w-8/12 mx-auto h-full flex justify-between items-center gap-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <i className="ri-arrow-left-wide-line text-[#999] text-4xl"></i>

          <div className="flex flex-col justify-center items-center space-y-6">
            <motion.h1
              className="font-metropolis-bold text-3xl text-white"
              variants={fadeInLeft}
            >
              Sequi ea ut et est quaerat
            </motion.h1>

            <motion.div
              className="flex flex-col w-8/12 mx-auto"
              variants={fadeIn}
            >
              <p className="text-center text-base text-[#999] font-nexa-bold">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <button className="border-[2px] border-[#ef6603] px-6 py-3 rounded-full text-white font-metropolis-light hover:bg-[#ef6603]">
                Learn More
              </button>
            </motion.div>
          </div>

          <i className="ri-arrow-right-wide-line text-[#999] text-4xl"></i>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero_section;
