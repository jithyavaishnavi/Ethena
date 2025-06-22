"use client";
import React, { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <section className="bg-black text-white font-poppins px-6 md:px-12 py-20">
      {/* heading */}
      <div className="max-w-6xl mx-auto text-left mb-8">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white mb-6">
          CONTACT US
        </h2>
        <h2 className="text-xl text-white mb-4">We're Here to Help</h2>
        <p className="text-gray-300">
          Please reach out to us by filling out the form, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left font-poppins order-2 lg:order-1">
          <div>
            <label className="block text-sm mb-1 text-gray-300 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:outline-none focus:ring-2 focus:ring-[#C8A2C8]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@email.com"
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:outline-none focus:ring-2 focus:ring-[#C8A2C8]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:outline-none focus:ring-2 focus:ring-[#C8A2C8]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C8A2C8] text-white font-semibold py-3 rounded-full hover:scale-110 hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(200,162,200,0.5)] transition"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-white-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
