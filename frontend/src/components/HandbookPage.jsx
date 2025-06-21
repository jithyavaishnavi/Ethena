import React from 'react';

const HandbookPage = () => {
  return (
    <section id="Handbook" className="bg-black text-white font-poppins px-6 md:px-12 py-20 space-y-20 overflow-hidden relative">

      {/* 🌌 Content Container */}
      <div className="max-w-6xl mx-auto grid gap-16 animate-fadeInUp">

        {/* 📚 Section Header */}
        <div className="text-left space-y-6">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white">
            Welcome to the Ethena Handbook
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Your one-stop guide for navigating our community, tools, and resources. Whether you're a beginner or a seasoned Ethereum explorer, this handbook will help you get the most out of your journey with <span className="text-[#C8A2C8] font-medium">Ethena</span>.
          </p>
        </div>

        {/* 🎯 Our Mission */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">Our Mission</h3>
          <p className="text-white/80">
            We’re building an inclusive space where women and allies collaborate to drive innovation in Ethereum and blockchain. We value curiosity, creativity, and community — and we’re here to support you every step of the way.
          </p>
        </div>

        {/* 🚀 Getting Started */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">Getting Started</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8] text-white/80">
            <li>Join the community: Discord / Telegram / Membership</li>
            <li>Attend onboarding sessions and events</li>
            <li>Install tools like MetaMask & Remix IDE</li>
            <li>Explore Ethereum with Etherscan & L2 rollups</li>
            <li>Contribute to projects or join study groups</li>
          </ul>
        </div>

        {/* 📜 Community Guidelines */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">Community Guidelines</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8] text-white/80">
            <li>Respect each other — diversity is our strength</li>
            <li>No harassment, hate speech, or toxicity</li>
            <li>Stay curious and help others grow</li>
            <li>Promote inclusion and a supportive space</li>
          </ul>
        </div>

        {/* ✨ How to Contribute */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">How to Contribute</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8] text-white/80">
            <li>Technical: Smart contracts, DApps, audits</li>
            <li>Design: UI/UX, branding, content</li>
            <li>Community: Events, mentorship, moderation</li>
            <li>Research & writing: Articles, blogs, tutorials</li>
          </ul>
        </div>

        {/* ❓ FAQ */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">FAQ</h3>
          <ul className="space-y-4 pl-4 list-disc marker:text-[#C8A2C8] text-white/80">
            <li><strong className="text-white">Do I need Ethereum experience?</strong> → No, beginners are welcome!</li>
            <li><strong className="text-white">Do I need to be a developer?</strong> → No — designers, artists, writers, and advocates are valued.</li>
            <li><strong className="text-white">Can men and allies join?</strong> → Yes, we are inclusive and welcome allies.</li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md animate-fadeInUp transition hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-lavender-300">Contact Us</h3>
          <p className="text-white/80">
            For any questions, ideas, or collaborations, feel free to reach out via our <span className="text-[#C8A2C8]">Contact Page</span> or email us at <code className="bg-[#C8A2C8] px-2 py-1 rounded font-mono">youremail@example.com</code>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HandbookPage;
