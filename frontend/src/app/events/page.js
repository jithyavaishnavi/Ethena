// src/app/about/page.js
import EventSection from "@/components/Events";
import FooterCTA from "@/components/FooterCTA";

export default function Events() {
  return (
    <div className="min-h-screen bg-white text-black">
      <EventSection/>
      <FooterCTA/>
    </div>
  );
}

