// src/app/about/page.js
import AboutSection from "@/components/AboutSection";
import FooterCTA from "@/components/FooterCTA";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <AboutSection />
      <FooterCTA/>
    </div>
  );
}

