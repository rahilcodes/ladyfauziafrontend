import Link from "next/link";
import Image from "next/image";

export default function BrandStoryTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Image Side */}
        <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
          <Image
            src="/image/brand_story.png"
            alt="Lady Fauzia Co. — Modest luxury crafted with joy"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:bg-gradient-to-l" />
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 lg:py-0 bg-[#F5F2EB] dark:bg-[#1A1A1A]">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4 pl-[0.3em]">
            Our Story
          </span>

          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.1em] text-foreground uppercase leading-snug mb-6">
            Founded on Joy,{" "}
            <span className="italic font-normal text-primary">
              Crafted with Purpose
            </span>
          </h2>

          <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/70 dark:text-foreground/60 mb-4 max-w-lg">
            Lady Fauzia Co. was born from the belief that modesty and luxury are
            not opposites — they are partners. Every piece in our collection is
            designed for the woman who refuses to compromise on elegance, comfort,
            or self-expression.
          </p>

          <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/70 dark:text-foreground/60 mb-8 max-w-lg">
            From premium fabrics sourced with care to hand-finished details that
            elevate every silhouette, our collections embody timeless
            sophistication for the modern woman.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-primary uppercase hover:text-primary-strong transition-colors w-fit"
          >
            Read Our Story
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
