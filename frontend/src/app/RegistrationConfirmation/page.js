"use client";

import RegistrationConfirmation from "@/components/RegistrationConfirmation";
import FooterCTA from "@/components/FooterCTA";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <RegistrationConfirmation />
      <FooterCTA />
    </div>
  );
}
