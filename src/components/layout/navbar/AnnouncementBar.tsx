"use client";

import { useState, useEffect, useCallback } from "react";

const MESSAGES = [
  "Complimentary Shipping on Orders $150+",
  "Miami Launch — Coming Soon",
  "Joy Points: Earn Rewards with Every Purchase",
];

const STORAGE_KEY = "lf-announcement-dismissed";
const ROTATE_INTERVAL = 4500;

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true); // Start hidden to avoid flash
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    setDismissed(wasDismissed);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
        setIsTransitioning(false);
      }, 400);
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative w-full bg-[#1A1A1A] dark:bg-[#0D0D0D] overflow-hidden">
      <div className="mx-auto flex items-center justify-center px-10 py-2">
        <p
          className={`text-[10px] sm:text-xs font-medium tracking-[0.25em] text-[#C5A880] uppercase text-center transition-all duration-400 ${
            isTransitioning
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {MESSAGES[currentIndex]}
        </p>
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#C5A880]/60 hover:text-[#C5A880] transition-colors cursor-pointer"
        aria-label="Dismiss announcement"
        type="button"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
