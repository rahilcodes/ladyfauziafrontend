export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5L2 4.5V9C2 13.14 5.06 16.92 9 18C12.94 16.92 16 13.14 16 9V4.5L9 1.5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Authentic Guarantee",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 12L5 9L2 6M16 12L13 9L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 9H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ),
      label: "Free Returns",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="6" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
          <path d="M3 9H15" stroke="currentColor" strokeWidth="1"/>
          <path d="M6 13H9" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M6 4.5V6M12 4.5V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ),
      label: "Secure Payment",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L11 6.5H16L12 9.5L13.5 14L9 11L4.5 14L6 9.5L2 6.5H7L9 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Joy Points Eligible",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-5 mt-4 border-t border-border/50">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-1.5 text-muted"
        >
          <span className="text-primary/70">{badge.icon}</span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.08em] font-medium uppercase">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
