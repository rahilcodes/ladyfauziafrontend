import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lookbook | Lady Fauzia Co.",
  description:
    "Explore Season One — Joyful Beginnings. A visual celebration of modest luxury, editorial beauty, and the timeless elegance of Lady Fauzia Co.",
  openGraph: {
    title: "The Lookbook | Lady Fauzia Co.",
    description:
      "Explore Season One — Joyful Beginnings. A visual celebration of modest luxury and editorial beauty.",
    type: "website",
  },
};

const lookbookImages = [
  {
    src: "/image/lookbook_1.png",
    alt: "Lookbook — flowing kaftan in champagne silk",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/image/lookbook_2.png",
    alt: "Lookbook — embellished hijab styling",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/image/lookbook_3.png",
    alt: "Lookbook — ivory abaya with crystal detail",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/image/lookbook_4.png",
    alt: "Lookbook — modest evening ensemble",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/image/lookbook_5.png",
    alt: "Lookbook — layered modest look with gold accents",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/image/lookbook_6.png",
    alt: "Lookbook — sunset editorial silhouette",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export default function LookbookPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/image/lookbook_hero.png"
          alt="Lady Fauzia Co. — The Lookbook"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            Season One
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            The Lookbook
          </h1>
          <p className="mt-4 max-w-lg text-sm tracking-[0.1em] text-white/80 md:text-base">
            Joyful Beginnings
          </p>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-screen-xl px-6 py-6 md:px-12"
      >
        <ol className="flex items-center gap-2 text-xs tracking-[0.15em] text-muted">
          <li>
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">The Lookbook</li>
        </ol>
      </nav>

      {/* ── Introduction ──────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-md px-6 py-12 text-center md:px-12 md:py-16">
        <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
          Season One — Joyful Beginnings
        </p>
        <h2 className="font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-3xl">
          A Visual Story
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-strong md:text-base">
          Our debut collection is a love letter to modest elegance — captured
          through the lens of Miami&apos;s golden light. Each look tells a
          story of intention, beauty, and joy.
        </p>
      </section>

      {/* ── Image Grid ────────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 pb-16 md:px-12 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {lookbookImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span} ${image.aspect}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
              {/* Hover indicator */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="bg-white/90 px-5 py-2 text-xs tracking-[0.2em] uppercase text-foreground backdrop-blur-sm">
                  Look {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Wear the Story
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Every look from Joyful Beginnings is available to shop now.
          </p>
          <Link
            href="/search"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Shop Season One
          </Link>
        </div>
      </section>
    </>
  );
}
