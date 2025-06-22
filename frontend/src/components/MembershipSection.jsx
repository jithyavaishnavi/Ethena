'use client';

import React, { useState } from 'react';

export function MembershipSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    membershipType: 'General',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setStatus('✅ Thank you for joining!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          membershipType: 'General',
          message: '',
        });
      } else {
        setStatus('❌ Failed to save. Try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('❌ Error submitting form');
    }
  };

  return (
    <section className="bg-black text-white font-poppins px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto text-left">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8">JOIN OUR COMMUNITY</h1>

        <p className="text-base lg:text-lg mb-16 leading-relaxed space-y-4">
          <strong>Why join Ethana Ethereum?</strong>
          <br /><br />
          <strong>1. Inclusive & Supportive Community:</strong> Open to all women and non-binary individuals, fostering a space where everyone can grow, learn, and collaborate.
          <br /><br />
          <strong>2. Learn Ethereum Protocol Development:</strong> Gain hands-on experience with cutting-edge blockchain technology. Stay updated on the latest advancements in Ethereum.
          <br /><br />
          <strong>3. Network with Industry Leaders:</strong> Connect with developers, researchers, and leaders in the Ethereum ecosystem. Build meaningful relationships for mentorship and collaboration.
          <br /><br />
          <strong>4. Develop Your Skills:</strong> Participate in workshops, hackathons, talks, and study groups. From foundational concepts to advanced Ethereum Improvement Proposals (EIPs), there’s something for everyone.
          <br /><br />
          <strong>5. Promote Diversity in Tech:</strong> Help increase diversity and representation within the blockchain and Web3 communities.
          <br /><br />
          <strong>6. Contribute & Make an Impact:</strong> Play a role in shaping the future of decentralized technologies and one of the world’s most important blockchain platforms.
        </p>

      </div>

      <div className="grid grid-cols-1 max-w-6xl mx-auto text-left">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:ring-2 focus:ring-[#C8A2C8]-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@email.com"
              required
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:ring-2 focus:ring-[#C8A2C8]-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:ring-2 focus:ring-[#C8A2C8]-400"
            />
          </div>

          {/* Membership Type */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Membership Type</label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:ring-2 focus:ring-[#C8A2C8]-400"
            >
              <option value="General">General</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Contributor">Contributor</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your interest in Ethereum..."
              rows="4"
              className="w-full px-4 py-3 bg-black border border-white rounded text-white focus:ring-2 focus:ring-[#C8A2C8]-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#C8A2C8] text-white font-semibold py-3 rounded hover:bg-[#a97ca9] transition"
          >
            Join Now
          </button>
        </form>

        {status && <p className="mt-4 text-white-400">{status}</p>}
      </div>
    </section>
  );
}

export default MembershipSection;
