"use client";
import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import Spline from '@splinetool/react-spline';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const HeroSection = () => {

  return (
    <section className="relative bg-black text-white pb-16 h-[80vh] pb-16 overflow-hidden">      {/* 🔮 Fullscreen Responsive Spline Background */}
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
        <Spline
          scene="https://prod.spline.design/A1tAo0vjb7phuODp/scene.splinecode"
          className="w-full h-full  bg-black"
        />
      </div>


      {/* 🚀 Hero Content */}
      <div className="relative z-10 w-full h-[80vh] max-w-8xl mx-auto mt-10 md:mt-24 ">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-">
          <div className="max-w-6xl mx-auto">
            
            <h1 className="mt-4 text-5xl md:text-8xl font-extrabold leading-tight tracking-tight">
              Empowering Diversity <br />
              in <span className="text-[#C8A2C8]">Ethereum's</span> Future
            </h1>

            <p className="mt-6 text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
              Ethena is a community advancing gender diversity in
              the Ethereum ecosystem, fostering <span className="text-[#C8A2C8] font-semibold">innovation, collaboration, and inclusivity</span>,
              building a decentralized future where every voice matters.
            </p>

            <a
              href="https://discord.com"
              className="mt-8 inline-flex items-center space-x-3 bg-[#C8A2C8] text-white font-medium text-sm px-6 py-3 rounded-full shadow-md hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1f2] focus:ring-offset-2"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Join Discord Server</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
