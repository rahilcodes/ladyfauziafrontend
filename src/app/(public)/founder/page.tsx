import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founder | Lady Fauzia Co.",
  description:
    "Meet the visionary behind Lady Fauzia Co. — a founder driven by the belief that modest fashion deserves the same luxury, artistry, and joy as any other expression of style.",
  openGraph: {
    title: "The Founder | Lady Fauzia Co.",
    description:
      "Meet the visionary behind Lady Fauzia Co. — a founder driven by the belief that modest fashion deserves the same luxury, artistry, and joy as any other expression of style.",
    type: "website",
  },
};

const milestones = [
  {
    year: "The Vision",
    title: "A Dream Takes Shape",
    description:
      "The idea for Lady Fauzia Co. was born — a brand that would bridge the gap between modest dressing and high fashion. Sketchbooks filled with silhouettes that honoured tradition while embracing contemporary design.",
  },
  {
    year: "The Studio",
    title: "Miami Design Studio Opens",
    description:
      "A sun-filled studio in Miami became the creative home of Lady Fauzia Co. Here, surrounded by fabric swatches and inspiration boards, the first collection began to take physical form — each piece hand-draped and refined.",
  },
  {
    year: "Season One",
    title: "Miami Launch — Joyful Beginnings",
    description:
      "Lady Fauzia Co. officially launches with its debut collection: 'Joyful Beginnings.' The response is immediate and heartfelt — women around the world recognise a brand that finally speaks their language of modest luxury.",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/image/founder_hero.png"
          alt="The Founder — Lady Fauzia Co."
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            Lady Fauzia Co.
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            The Founder
          </h1>
          <p className="mt-4 max-w-lg text-sm tracking-[0.1em] text-white/80 md:text-base">
            The woman behind the vision, the craft, and the joy.
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
          <li className="text-foreground">The Founder</li>
        </ol>
      </nav>

      {/* ── Personal Narrative ────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/image/founder_portrait.png"
              alt="Lady Fauzia — Founder portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              A Personal Journey
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Behind the
              <br />
              Brand
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                Lady Fauzia Co. began not in a boardroom, but in the quiet
                spaces of personal reflection — born from years of searching
                for fashion that honoured both faith and individual style. The
                founder&apos;s journey into modest luxury was deeply personal: a
                desire to dress with intention, beauty, and confidence, without
                ever having to choose one at the expense of another.
              </p>
              <p>
                Growing up surrounded by rich cultural traditions and a deep
                appreciation for fine textiles, she developed an eye for the
                details that elevate clothing from ordinary to extraordinary —
                the drape of a silk, the weight of a well-cut sleeve, the quiet
                shimmer of a hand-placed crystal.
              </p>
              <p>
                What began as a personal quest became a larger calling. She saw
                a gap in the fashion landscape — a space where modest women
                were underserved by an industry that often equated coverage with
                frumpiness. Lady Fauzia Co. was created to fill that void with
                uncompromising elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ────────────────────────────────────────── */}
      <section className="border-y border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-md px-6 text-center md:px-12">
          <blockquote>
            <p className="font-outfit text-xl leading-relaxed tracking-[0.1em] text-foreground md:text-2xl md:leading-relaxed">
              &ldquo;I wanted to create a world where a woman never has to
              apologise for wanting to look beautiful while staying true to her
              values. Modesty is not a limitation — it is the most elegant form
              of self-expression.&rdquo;
            </p>
            <cite className="mt-6 block text-xs not-italic tracking-[0.2em] uppercase text-primary">
              — The Founder, Lady Fauzia Co.
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Vision & Philosophy ───────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              The Philosophy
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Designing
              <br />
              With Purpose
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                For the founder, every design decision is guided by a simple
                philosophy: fashion should bring joy. Not fleeting trend-driven
                excitement, but a deep, abiding sense of confidence and
                happiness. The kind of joy that comes from putting on a garment
                that feels as though it were made just for you.
              </p>
              <p>
                This philosophy extends beyond aesthetics. It shapes how the
                brand sources its fabrics — prioritising ethical production and
                sustainable practices. It informs how each garment is
                constructed — with hand-finished details that honour the craft
                of dressmaking. And it defines how the brand engages with its
                community — with warmth, authenticity, and genuine care.
              </p>
              <p>
                &ldquo;Joyful. Always.&rdquo; is not merely a slogan. It is the
                founding promise — a compass that guides every collection,
                every decision, and every interaction.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/image/founder_studio.png"
              alt="Lady Fauzia Co. design studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Second Pull Quote ─────────────────────────────────── */}
      <section className="border-y border-border py-16 md:py-20">
        <div className="mx-auto max-w-screen-md px-6 text-center md:px-12">
          <blockquote>
            <p className="font-outfit text-xl leading-relaxed tracking-[0.1em] text-foreground md:text-2xl md:leading-relaxed">
              &ldquo;Luxury is not about the price tag. It is about the feeling
              — the way a perfectly draped kaftan makes you stand a little
              taller, smile a little wider. That&apos;s what we design
              for.&rdquo;
            </p>
            <cite className="mt-6 block text-xs not-italic tracking-[0.2em] uppercase text-primary">
              — The Founder, Lady Fauzia Co.
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Brand Milestones Timeline ─────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
            The Journey
          </p>
          <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
            Brand Milestones
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block" />

                <p className="mb-2 text-xs tracking-[0.2em] uppercase text-primary">
                  {milestone.year}
                </p>
                <h3 className="font-outfit text-xl font-semibold tracking-[0.1em] text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-strong md:text-base">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Joyful. Always.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Step into the world of Lady Fauzia Co. and discover fashion that
            honours who you are.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </>
  );
}
