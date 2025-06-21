"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Events = () => {
  const eventsData = [
    {
      title: "Blockchain Workshop",
      description:
        "Learn the fundamentals of blockchain technology and its applications.",
      date: "April 22, 2024",
      location: "Online",
    },
    {
      title: "Smart Contract Development",
      description:
        "Dive into Solidity and learn how to write your first smart contract.",
      date: "May 10, 2024",
      location: "New York, NY",
    },
    {
      title: "Decentralized Finance (DeFi) Summit",
      description:
        "Explore the latest trends and innovations in the world of DeFi.",
      date: "June 15, 2024",
      location: "San Francisco, CA",
    },
  ];

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="Event"
      className="bg-black text-white font-poppins px-6 md:px-12 py-20"
    >
      {/* Event Section Header */}
      <div className="max-w-6xl mx-auto text-left mb-24">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white mb-6">
          EVENTS
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
          Ethena is a community committed to reducing the gender disparity
          within the Ethereum ecosystem. It seeks to build a safe, empowering,
          and inclusive space for underrepresented gender groups across the
          Ethereum protocol layer. Through peer-to-peer study groups,
          mentorship, and events, we aim to create a space that values all voices
          and drives protocol innovation forward.
        </p>
        <a href="/handbook">
          <button className="flex items-center gap-2 px-6 py-[8px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border hover:border-[#C8A2C8] hover:shadow-[0_0_20px_rgba(200,162,200,0.7)] transition">
            ↗ Handbook
          </button>
        </a>
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-6 gap-8">
        {eventsData.map((event, index) => (
          <motion.div
            key={`${event.title}-${index}`}
            variants={eventVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="col-span-6 md:col-span-3 lg:col-span-2 flex"
          >
            <div className="flex flex-col justify-between bg-[#C8A2C8] text-white p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl border border-[#C8A2C8] hover:border-transparent w-full h-full">
              <div className="mb-4 space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-white/90 mb-6 leading-relaxed flex-1">
                {event.description}
              </p>
              <a
                href="/RegistrationConfirmation"
                className="mt-auto bg-white hover:bg-transparent text-[#C8A2C8] font-medium px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 border border-white hover:text-white"
              >
                REGISTER NOW <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
