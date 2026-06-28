"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownTimerProps {
  targetDate: string; // ISO date string, e.g. "2026-11-01T00:00:00Z"
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftData: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false,
        };
      }

      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 max-w-xl mx-auto py-4">
        {[
          { label: "Days" },
          { label: "Hours" },
          { label: "Minutes" },
          { label: "Seconds" },
        ].map((unit, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32"
          >
            <span className="font-outfit text-2xl sm:text-3xl md:text-4xl font-light text-white">
              --
            </span>
            <span className="text-[9px] sm:text-xs tracking-[0.2em] text-[#C5A880] uppercase mt-1 sm:mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-6">
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] text-[#C5A880] uppercase animate-pulse">
          Now Live
        </h2>
        <p className="text-xs sm:text-sm text-white/70 tracking-widest mt-2 uppercase">
          Welcome to Lady Fauzia Co. Miami
        </p>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 max-w-xl mx-auto py-4">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 shadow-2xl transition-all duration-300 hover:border-[#C5A880]/30 group"
        >
          <span className="font-outfit text-2xl sm:text-3xl md:text-4xl font-light text-white group-hover:text-[#C5A880] transition-colors duration-300">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-xs tracking-[0.2em] text-[#C5A880]/80 group-hover:text-[#C5A880] uppercase mt-1 sm:mt-2 transition-colors duration-300">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
