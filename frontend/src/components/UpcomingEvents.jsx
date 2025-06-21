"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Introduction to Blockchain",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities.",
      date: "April 22, 2026",
      location: "Online",
    },
    {
      title: "Smart Contract Development",
      description:
        "Explore the fundamentals of Solidity and how to deploy contracts on the Ethereum testnet.",
      date: "May 5, 2026",
      location: "Community Hall",
    },
    {
      title: "Advanced Ethereum Concepts",
      description:
        "Dive deeper into Ethereum core concepts, Layer 2 scaling solutions, and protocol-level innovations.",
      date: "June 10, 2026",
      location: "Online",
    },
  ];

  const eventVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-black text-[#C8A2C8] px-4 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center md:text-left">
          UPCOMING EVENTS
        </h2>
        <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed text-center md:text-left">
          Join our vibrant community events where women and allies come together
          to learn and grow. From hands-on workshops to expert-led talks, there's
          something for everyone. Connect with like-minded individuals passionate
          about Ethereum and blockchain technology. Collaborate on exciting
          projects, share your ideas, and expand your network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={`${event.title}-${index}`}
              variants={eventVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="flex h-full"
            >
              <div className="bg-[#C8A2C8] text-white p-6 rounded-xl shadow-lg flex flex-col flex-grow justify-between w-full h-full min-h-[30px] transition-all transform hover:scale-105 hover:shadow-2xl border border-[#C8A2C8] hover:border-transparent">
                {/* Card top */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <p className="text-sm text-white/90 leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Button at bottom */}
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
      </div>
    </section>
  );
};

export default UpcomingEvents;
