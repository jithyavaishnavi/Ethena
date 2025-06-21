'use client';
import React, { useState } from "react";
import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const FooterCTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {  // <== match your Express server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black font-poppins">
      {/* CTA Section */}
      <section className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 space-y-12 md:space-y-8 text-[16px] leading-relaxed">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-semibold mb-6 font-montserrat">
            Discover exciting opportunities to grow, collaborate,<br />
            and innovate with <span className="font-bold text-[#C8A2C8]">Ethena</span>. Join us
            in shaping an <br />inclusive Ethereum ecosystem.
          </h2>

          <div className="flex gap-4 flex-wrap">
            <a href="/handbook">
              <button className="flex items-center gap-2 px-6 py-[8px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:scale-110 hover:bg-black hover:border hover:border-[#C8A2C8] hover:shadow-[0_0_20px_rgba(200,162,200,0.7)] transition">
                ↗ Handbook
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 pt-16 pb-8 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
          {/* About Section */}
          <div className="transition duration-700 hover:scale-[1.01] hover:opacity-100 opacity-90">
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-[#c8a2c8] transition">About</a></li>
              <li><a href="/events" className="hover:text-[#c8a2c8] transition">Events</a></li>
              <li><a href="/studygroup" className="hover:text-[#c8a2c8] transition">Study Group</a></li>
              <li><a href="/collaborate" className="hover:text-[#c8a2c8] transition">Collaborate</a></li>
              <li><a href="https://discord.com/invite/example" className="hover:text-[#c8a2c8] transition">Discord Community</a></li>
              <li><a href="/codeofconduct" className="hover:text-[#c8a2c8] transition">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Contact Info & Social Icons */}
          <div className="transition duration-700 hover:scale-[1.01] hover:opacity-100 opacity-90">
            <h3 className="text-lg font-semibold font-montserrat mb-4">Contact Us</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>info@Ethena.org</p>
              <p>Tel: 123-456-7890</p>
              <p>500 Terry Francine Street, San Francisco, CA</p>
            </div>

            <div className="flex space-x-4 mt-6 text-white text-lg">
              <a href="mailto:info@wiep.org" className="hover:text-[#c8a2c8] transition hover:scale-110"><FaEnvelope /></a>
              <a href="https://github.com" className="hover:text-[#c8a2c8] transition hover:scale-110"><FaGithub /></a>
              <a href="https://linkedin.com" className="hover:text-[#c8a2c8] transition hover:scale-110"><FaLinkedin /></a>
              <a href="https://discord.gg" className="hover:text-[#c8a2c8] transition hover:scale-110"><FaDiscord /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="transition duration-700 hover:scale-[1.01] hover:opacity-100 opacity-90">
            <h3 className="text-lg font-semibold font-montserrat mb-4">Stay Updated</h3>
            <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-300">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-transparent border border-[#c8a2c8]/40 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8a2c8] transition-all duration-300 focus:shadow-[0_0_10px_rgba(200,162,200,0.5)]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="subscribe" className="accent-[#c8a2c8]" />
                <label htmlFor="subscribe" className="text-gray-300">
                  Subscribe me to the newsletter
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full px-6 py-[8px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:bg-black hover:border hover:border-[#C8A2C8] hover:shadow-[0_0_20px_rgba(200,162,200,0.7)] transition"
              >
                {loading ? 'Submitting...' : subscribed ? 'Subscribed!' : 'Submit'}
              </button>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>

        {/* Footer Bottom Text Centered */}
        <div className="pt-12 text-center text-xs text-[#c8a2c8] opacity-80 hover:opacity-100 transition">
          © 2025 Ethena
        </div>
      </footer>
    </div>
  );
};

export default FooterCTA;
