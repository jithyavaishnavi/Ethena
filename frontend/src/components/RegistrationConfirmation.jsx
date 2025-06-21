"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const RegistrationConfirmation = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 md:px-12 py-20 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#C8A2C8] text-white max-w-lg w-full p-8 rounded-xl shadow-lg text-center border border-[#C8A2C8]"
      >
        <CheckCircleIcon className="w-16 h-16 text-white-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
        <p className="text-base md:text-lg mb-6 text-white/90">
          Thank you for registering for our event. We’ve received your details
          and will send you a confirmation email shortly.
        </p>
        <div className="flex justify-center">
          <a
            href="/events"
            className="flex items-center gap-2 px-6 py-[8px] rounded-full bg-white text-[#C8A2C8] text-[14px] hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(200,162,200,0.5)] transition-all duration-300"
          >
            ↗ Events
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationConfirmation;
