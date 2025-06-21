// src/app/about/page.js
'use client';

import FooterCTA from "@/components/FooterCTA";
import MembershipSection from "@/components/MembershipSection";

export default function Membership() {
  return (
    <div className="min-h-screen bg-white text-black">
      <MembershipSection/>
      <FooterCTA/>
    </div>
  );
}

