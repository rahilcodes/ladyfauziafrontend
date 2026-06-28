export default function BrandPromiseStrip() {
  const promises = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17.5H1.5V24.5H26.5V17.5H25M3 17.5V14L7 10.5H11.5L13 12.5H18L21 10.5H25V17.5M3 17.5H25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8" cy="21" r="2" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="20" cy="21" r="2" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      ),
      title: "Complimentary Shipping",
      subtitle: "On orders $150+",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3L16.5 10H24L18 14.5L20 22L14 17.5L8 22L10 14.5L4 10H11.5L14 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Handcrafted Details",
      subtitle: "Premium quality",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M4 12H24" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M8 17H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M8 6V8M20 6V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Secure Checkout",
      subtitle: "SSL encrypted",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3L4 7V13C4 19.08 8.28 24.72 14 26C19.72 24.72 24 19.08 24 13V7L14 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14L12.5 16.5L18 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Joy Points Rewards",
      subtitle: "Earn with every purchase",
    },
  ];

  return (
    <section className="py-8 sm:py-12 border-b border-border/30 dark:border-neutral-800/50">
      <div className="grid grid-cols-2 gap-6 sm:gap-4 md:grid-cols-4">
        {promises.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center gap-2.5 group"
          >
            <div className="text-primary transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-foreground/90">
                {item.title}
              </p>
              <p className="text-[10px] sm:text-[11px] tracking-[0.1em] text-muted mt-0.5">
                {item.subtitle}
              </p>
            </div>
            {index < promises.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-border/40" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
