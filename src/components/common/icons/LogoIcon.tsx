"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className }: LogoIconProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine logo source
  const isDark = mounted && resolvedTheme === "dark";
  const logoSrc = isDark
    ? "/image/lady fauzia logo dark backgroung.png"
    : "/image/lady fauzia logo.png";

  return (
    <div className={className}>
      <div className="relative h-12 w-[120px] md:h-16 md:w-[160px] lg:h-20 lg:w-[200px] select-none flex items-center justify-start">
        <Image
          src={logoSrc}
          alt="Lady Fauzia"
          fill
          sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
          priority
          className="object-contain transition-all duration-300"
        />
      </div>
    </div>
  );
}


