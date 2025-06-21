import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="About" className="relative bg-black text-white font-poppins px-6 md:px-12 py-24 overflow-hidden">
      {/* 🔮 About Us */}
      <div className="max-w-6xl mx-auto mb-48 animate-fadeInUp">
        <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white mb-6">
          About Us
        </h2>
        <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 shadow-inner backdrop-blur-md space-y-6">
          <p className="text-lg text-white/90 leading-relaxed">
            Ethena is a community committed to reducing the gender disparity within the Ethereum ecosystem.
            Ethena seeks to build a safe, empowering, and inclusive space for underrepresented gender groups across the Ethereum protocol layer.
            Through peer-to-peer study groups, mentorship, and events, we aim to create a space that values all voices and drives protocol innovation forward.
          </p>
          <a href="/handbook" className="inline-block mt-6">
            <button className="flex items-center gap-2 px-6 py-[8px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border hover:border-[#C8A2C8] hover:shadow-[0_0_20px_rgba(200,162,200,0.7)] transition">
              ↗ Handbook
            </button>
          </a>

        </div>
      </div>

      {/* 💬 Mission */}
      <div className="text-center max-w-4xl mx-auto mb-48 px-4 animate-fadeInUp">
        <p className="text-2xl md:text-3xl leading-snug font-semibold text-white">
          Our mission is to create an environment where developers of all genders feel&nbsp;
          <span className="text-[#C8A2C8]">valued, inspired, and supported</span>,
          making diversity the norm rather than the exception in blockchain technology.
        </p>
      </div>

      {/* 👩‍🚀 Founder Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fadeInUp">
        {/* Founder Image Placeholder */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="w-[280px] h-[280px] bg-white/10 rounded-3xl border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 text-lg shadow-md hover:scale-105 transition">
            Founder Image
          </div>
        </div>

        {/* Founder Description */}
        <div className="text-base text-white leading-relaxed space-y-4">
          <p>
            Ethenawas born from the belief that inclusive participation improves outcomes.
            Our programs are grounded in the values of mentorship, transparency, and shared learning.
          </p>
          <p>
            Whether you're a beginner or a seasoned dev, we’re building an Ethereum where you belong—and where your ideas matter.
            Protocol-level change requires everyone at the table.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
