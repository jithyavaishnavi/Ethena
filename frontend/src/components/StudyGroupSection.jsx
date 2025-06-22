'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation helper
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const StudyGroupSection = () => {
  const scheduleData = [
    {
      title: 'Blockchain Workshop',
      date: 'April 22, 2024, UTC 14:30',
      description:
        'Our mission is to create an environment where developers of all genders feel valued, inspired, and supported, making diversity the norm rather than the exception in blockchain technology.',
    },
    {
      title: 'DeFi 101',
      date: 'May 1, 2024, UTC 16:00',
      description: 'Introduction to Decentralized Finance concepts.',
    },
    {
      title: 'Smart Contract Basics',
      date: 'May 8, 2024, UTC 18:00',
      description: 'Learn the fundamentals of writing smart contracts.',
    },
    {
      title: 'NFTs and the Metaverse',
      date: 'May 15, 2024, UTC 14:30',
      description: 'Exploring the world of Non-Fungible Tokens.',
    },
    {
      title: 'Web3 Security',
      date: 'May 22, 2024, UTC 16:00',
      description: 'Best practices for secure Web3 development.',
    },
  ];

  return (
    <section className="bg-black text-white font-poppins px-6 md:px-12 py-20">

      {/* Intro Text */}
      <div className="max-w-6xl mx-auto text-left mb-24">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6">
          STUDY GROUP
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
          Championing diversity in the blockchain space is crucial for driving
          innovation, fostering collaboration, and shaping the Ethereum protocol
          into a truly decentralized future where every voice matters. A Women in
          Ethena group is essential to ensure that gender diversity
          becomes the standard, not the exception. By creating a supportive and
          inspiring environment, we empower developers of all genders to
          contribute their unique perspectives, leading to a stronger, more
          inclusive Ethereum ecosystem.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-white">

        </p>
        <a href="/handbook">
          <button className="flex items-center gap-2 px-6 py-[8px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border hover:border-[#C8A2C8] hover:shadow-[0_0_20px_rgba(200,162,200,0.7)] transition">
            ↗ Handbook
          </button>
        </a>
      </div>

      {/* Study Group Events */}
      <motion.section
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp(0.3)}
      >
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6 text-left">
          STUDY GROUP SCHEDULE
        </h2>
        <div className="grid grid-cols-1 gap-10">
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.title} // Use item.title as key
              className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white px-6 py-[6px] rounded-full shadow-md w-full md:w-[500px] transition transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2 + index * 0.2)}
            >
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="font-bold text-white text-[16px] md:text-[18px] block">
                    {item.title}
                  </span>
                  <span className="text-[14px] text-white/80 block mt-1">
                    {item.date}
                  </span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <a href="https://discord.com/login" target="_blank" rel="noopener noreferrer">
                    <span className="text-white text-sm">➔</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why SG */}
      <div className="max-w-6xl mx-auto text-left mt-24">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6">
          WHY JOIN THE STUDY GROUP?
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-white">

        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
          The study group provides a platform for women to:

          Learn Together: Collaborative learning sessions focused on various aspects of the Ethereum protocol, including EIPs (Ethereum Improvement Proposals), smart contracts, consensus mechanisms, and other technical topics.
          Build Community: A space for women to connect, network, and share experiences within the Ethereum ecosystem.
          Skill Development: Opportunities to develop technical skills and gain deeper knowledge about the Ethereum protocol.
          Mentorship and Support: Access to mentors and resources that can help guide participants in their learning journey.
          Empowerment: Encouraging more women to actively participate and take leadership roles in the Ethereum community and make their first Pull Request.

        </p>
      </div>
    </section>
  );
};

export default StudyGroupSection;
