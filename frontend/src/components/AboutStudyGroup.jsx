'use client';

import React from "react";
import { motion } from "framer-motion";

const AboutStudyGroup = () => {
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  const viewportOnce = { once: true };

  const studyGroupEvents = [
    {
      title: "Blockchain Workshop",
      date: "April 22, 2024, UTC 14:30",
    },
    {
      title: "Smart Contracts Deep Dive",
      date: "May 12, 2024, UTC 16:00",
    },
    {
      title: "Ethereum Scaling Solutions",
      date: "June 8, 2024, UTC 15:00",
    },
  ];

  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 space-y-24 text-[16px] leading-relaxed">
      {/* About Us Section */}
      <motion.section
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp(0)}
      >
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6">ABOUT US</h2>
        <p className="text-gray-200 mb-8 text-[16px] md:text-[18px]">
          Ethena is a vibrant community dedicated to promoting gender inclusivity within the Ethereum ecosystem, strives to nurture innovation, build meaningful collaborations, and contribute to a decentralized future where diverse perspectives shape the evolution of the Ethereum protocol. Our goal is to cultivate a supportive and inspiring space where developers of all gender identities feel empowered, respected, and uplifted — working towards a blockchain world where diversity is embraced as a fundamental strength, not a rare exception.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/about" className="flex items-center gap-2 px-6 py-[6px] rounded-full border border-white text-white text-[14px] hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition">
            <span>↗ Know More</span>
          </a>
          <button type="button" className="flex items-center gap-2 px-6 py-[6px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(200,162,200,0.5)] transition">
            <a href="/studygroup" className="flex items-center gap-2">
              <span>↗ Study Group</span>
            </a>
          </button>
        </div>
      </motion.section>

      {/* Study Group Section */}
      <motion.section
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp(0.3)}
      >
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6">STUDY GROUP</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {studyGroupEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white px-6 py-[6px] rounded-full shadow-md w-full md:w-[500px] transition transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp(0.2 + index * 0.2)}
              >
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="font-bold text-white text-[16px] md:text-[18px] block">
                      {event.title}
                    </span>
                    <span className="text-[14px] text-white/80 block mt-1">
                      {event.date}
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">➔</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex items-center mt-10 md:mt-0"
            initial="visible"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp(0.7)}
          >
            <p className="text-center text-justify text-gray-200 text-[16px] md:text-[18px]">
              Our Study Groups are designed to provide hands-on learning experiences on key blockchain topics, guided by experienced mentors. From understanding the basics of blockchain to diving deep into advanced Ethereum protocols, Ethena Study Groups foster peer learning, collaboration, and knowledge sharing — empowering participants to become active contributors to the Ethereum ecosystem.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial="visible"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp(1)}
        >
           <button type="button" className="flex items-center gap-2 px-6 py-[6px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(200,162,200,0.5)] transition">
            <a href="/studygroup" className="flex items-center gap-2">
              <span>↗ Know more</span>
            </a>
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutStudyGroup;
