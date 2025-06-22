"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        {/* 🧭 Navbar */}
        <nav className="relative z-10 w-full flex justify-center items-center py-6 px-6 sm:px-10 md:px-16 lg:px-24 text-xl mb-24">

          {/* 🌟 Logo (Left corner) */}
          <div className="absolute top-3 left-6 text-4xl font-extrabold text-[#ffffff] font-montserrat tracking-wide hover:scale-105 transition-transform cursor-pointer">
            <Link href="/">Ethena</Link>
          </div>

          {/* Desktop Nav Links (Center) */}
          <ul className="hidden md:flex space-x-8 text-lg font-light text-white/80">
            <li>
              <a href="/about" className="hover:scale-110 hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/events" className="hover:scale-110 hover:text-white transition-colors duration-300">
                Events
              </a>
            </li>
            <li>
              <a href="/studygroup" className="hover:scale-110 hover:text-white transition-colors duration-300">
                Study Groups
              </a>
            </li>
            <li>
              <a href="/membership" className="hover:scale-110 hover:text-white transition-colors duration-300">
                Membership
              </a>
            </li>
            <li>
              <a href="/collaborate" className="hover:scale-110 hover:text-white transition-colors duration-300">
                Collaborate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:scale-110 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* 🍔 Mobile Menu Toggle (Right corner) */}
          <div className="md:hidden absolute top-6 right-6">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 text-lg font-light text-white/90 px-6 pb-10">
            {["about", "events", "studygroup", "membership", "collaborate", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-white transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
