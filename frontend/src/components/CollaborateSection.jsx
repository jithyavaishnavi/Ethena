import React from 'react';

const CollaborateSection = () => {
  return (
    <section id="Collaborate" className="bg-black text-white font-poppins px-6 md:px-12 py-20 space-y-20 overflow-hidden relative">

      


      {/* 🌌 Content Container */}
      <div className="max-w-6xl mx-auto grid gap-16 animate-fadeInUp">
        
        {/* 🔮 Section Header */}
        <div className="text-left space-y-6">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white ">
            What Are We Looking For in a Ethena Speaker?
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            If you are the one or know someone who would be a great speaker for a Ethena event, <span className="text-[#C8A2C8] font-medium">we'd love to hear a nomination from you!</span>
          </p>
        </div>

        {/* 🎥 Video Clips */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">Video Clips Accepted</h3>
          <ul className="space-y-4 pl-4 marker:text-[#C8A2C8] list-disc text-white/80">
            <li>Your personal journey — what brought you to Ethereum, making it relatable and inspiring.</li>
            <li>An overview of the projects you're involved in and their impact on Ethereum.</li>
            <li>Tips, encouragement, and guidance for new developers entering the Ethereum space.</li>
          </ul>
        </div>

        {/* 🎙️ Recording Instructions */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300"> Recording Instructions</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8]-400 text-white/80">
            <li>Choose a quiet, well-lit space. Natural light is best; keep light in front of you.</li>
            <li>Use a webcam at eye level; ensure face and shoulders are clearly visible.</li>
            <li>Speak clearly. Use a microphone/headset if available for better audio.</li>
            <li>Sit 2–3 feet from the camera, centered with space above your head.</li>
            <li>Keep the background simple and uncluttered.</li>
            <li>Keep the video 1–2 minutes per question. Be clear and concise.</li>
            <li>
              File naming: <code className="bg-[#C8A2C8] px-2 py-1 rounded font-mono">FirstnameLastname.mp4</code>
            </li>
            <li>Preferred formats: MP4 or MOV. Default smartphone settings are fine.</li>
            <li>Send the completed video to the WiEP Point of Contact (POC).</li>
          </ul>
        </div>

        {/* 🧠 IRL Speaking Opportunities */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300"> IRL Speaking Opportunities</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8]text-white/80">
            <li><strong className="text-white">Industry Pioneers:</strong> Women who’ve led Ethereum or blockchain innovation.</li>
            <li><strong className="text-white">Technical Experts:</strong> Developers or researchers in core protocol work.</li>
            <li><strong className="text-white">Community Builders:</strong> Leaders growing inclusive Ethereum spaces.</li>
            <li><strong className="text-white">Entrepreneurs:</strong> Founders using Ethereum to build the future.</li>
            <li><strong className="text-white">Diversity Advocates:</strong> Promoting inclusive ecosystems.</li>
            <li><strong className="text-white">Legal Experts:</strong> Women shaping crypto policy.</li>
            <li><strong className="text-white">Academics:</strong> Blockchain researchers innovating with data.</li>
            <li><strong className="text-white">Artists:</strong> Women in NFTs and digital art on Ethereum.</li>
            <li><strong className="text-white">Panelists:</strong> Group discussions on blockchain, inclusion, and beyond.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CollaborateSection;
