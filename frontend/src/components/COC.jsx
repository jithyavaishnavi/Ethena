'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const COC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="Code of Conduct"
      className="bg-black text-white font-poppins px-6 md:px-12 py-20 transition-all duration-500"
    >
  

      {/* 🔐 Code of Conduct */}
      <div className="max-w-6xl mx-auto text-left animate-fade-in mb-8">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-8 border-l-4 pl-4 border-[#C8A2C8]">
          CODE OF CONDUCT
        </h2>
        <ul className="list-disc space-y-6 text-base md:text-lg leading-relaxed text-white/90 pl-6">
          {[
            ['Respect and Inclusion', 'We are committed to an inclusive environment...'],
            ['Professionalism', 'Members must conduct themselves with integrity...'],
            ['Collaboration and Support', 'We promote knowledge sharing...'],
            ['Privacy and Confidentiality', 'Respect others\' privacy...'],
            ['Anti-Harassment Policy', 'Harassment—including offensive comments...'],
            ['Commitment to Diversity', 'Diversity powers innovation...'],
            ['Accountability', 'Members are responsible for their actions...'],
            ['Continuous Improvement', 'This Code of Conduct evolves...'],
            ['Commitment to the Ethereum Ecosystem', 'Members should actively support the Ethereum protocol...'],
          ].map(([title, description], i) => (
            <li key={i} className="hover:pl-2 hover:text-white transition-all duration-300">
              <strong>{title}:</strong> {description}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔝 Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:bg-[#C8A2C8] hover:text-white transition-all"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default COC;
