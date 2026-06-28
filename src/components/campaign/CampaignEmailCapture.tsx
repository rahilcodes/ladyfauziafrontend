"use client";

import { useState } from "react";

interface CampaignEmailCaptureProps {
  campaignName?: string;
}

export default function CampaignEmailCapture({
  campaignName = "Miami Launch",
}: CampaignEmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // 1. Store in localStorage as a temporary database of campaign leads
      const STORAGE_KEY = `lf-campaign-${campaignName.toLowerCase().replace(/\s+/g, "-")}`;
      const existingLeads = localStorage.getItem(STORAGE_KEY);
      const leads: string[] = existingLeads ? JSON.parse(existingLeads) : [];

      if (!leads.includes(email)) {
        leads.push(email);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
      }

      // Simulate a small delay for premium feels
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setMessage(
        "Thank you. You have been added to our exclusive list. We will contact you with early access details."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === "success" ? (
        <div className="bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-2xl p-6 text-center animate-in fade-in zoom-in-95 duration-300">
          <span className="text-2xl text-[#C5A880] mb-2 block">✦</span>
          <h3 className="font-outfit text-sm font-semibold tracking-[0.15em] text-white uppercase mb-2">
            Subscription Confirmed
          </h3>
          <p className="text-xs text-white/80 leading-relaxed font-light">
            {message}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-white/20 bg-black/35 focus-within:border-[#C5A880]/60 transition-colors duration-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for early access"
              disabled={status === "loading"}
              className="w-full bg-transparent px-4.5 py-3.5 text-xs text-white placeholder-white/40 outline-none pr-28 tracking-wide"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#C5A880] hover:bg-[#B3966E] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-5 rounded-md transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              {status === "loading" ? (
                <div className="animate-spin rounded-full h-3 w-3 border-2 border-black border-t-transparent" />
              ) : (
                "Join List"
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-center text-[11px] text-red-400 tracking-wide">
              {message}
            </p>
          )}

          <p className="text-center text-[10px] text-white/50 tracking-wide font-light leading-relaxed">
            By signing up, you agree to receive email invitations to Lady Fauzia Co. events and collections.
          </p>
        </form>
      )}
    </div>
  );
}
