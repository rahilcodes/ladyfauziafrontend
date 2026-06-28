"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ── Metadata is handled via generateMetadata since this is a client component ── */
/* For client components we export metadata from a separate layout or use head.tsx */

const dressSizes = [
  { us: "0", bust: '31"', waist: '24"', hip: '34"' },
  { us: "2", bust: '32"', waist: '25"', hip: '35"' },
  { us: "4", bust: '33"', waist: '26"', hip: '36"' },
  { us: "6", bust: '35"', waist: '28"', hip: '38"' },
  { us: "8", bust: '36"', waist: '29"', hip: '39"' },
  { us: "10", bust: '37.5"', waist: '30.5"', hip: '40.5"' },
  { us: "12", bust: '39"', waist: '32"', hip: '42"' },
  { us: "14", bust: '41"', waist: '34"', hip: '44"' },
];

const hijabSizes = [
  { name: "Standard", width: '70 cm / 27.5"', length: '180 cm / 70"' },
  { name: "Large", width: '80 cm / 31.5"', length: '200 cm / 78.5"' },
];

const ringSizes = [
  { us: "5", diameter: '15.7 mm', circumference: '49.3 mm' },
  { us: "6", diameter: '16.5 mm', circumference: '51.9 mm' },
  { us: "7", diameter: '17.3 mm', circumference: '54.4 mm' },
  { us: "8", diameter: '18.1 mm', circumference: '57.0 mm' },
  { us: "9", diameter: '18.9 mm', circumference: '59.5 mm' },
  { us: "10", diameter: '19.8 mm', circumference: '62.1 mm' },
];

type CategoryKey = "dresses" | "hijabs" | "jewelry";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "dresses", label: "Dresses & Kaftans" },
  { key: "hijabs", label: "Hijabs" },
  { key: "jewelry", label: "Jewelry" },
];

export default function SizeGuidePage() {
  const [active, setActive] = useState<CategoryKey>("dresses");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="/image/sizeguide_hero.png"
          alt="Lady Fauzia Co. — Size Guide"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            Find Your Fit
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            Size Guide
          </h1>
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
          <li className="text-foreground">Size Guide</li>
        </ol>
      </nav>

      {/* ── Category Tabs ─────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 pt-8 md:px-12">
        <div className="flex flex-wrap gap-2 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                active === cat.key
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Size Tables ───────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16">
        {/* Dresses */}
        {active === "dresses" && (
          <div>
            <h2 className="mb-2 font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground">
              Dresses &amp; Kaftans
            </h2>
            <p className="mb-8 text-sm text-muted-strong">
              All measurements are in inches. If you fall between sizes, we
              recommend sizing up for a relaxed fit.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      US Size
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Bust
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Waist
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Hip
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dressSizes.map((row) => (
                    <tr
                      key={row.us}
                      className="border-b border-border/50 transition-colors hover:bg-primary-soft"
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">
                        {row.us}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.bust}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.waist}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.hip}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Hijabs */}
        {active === "hijabs" && (
          <div>
            <h2 className="mb-2 font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground">
              Hijabs
            </h2>
            <p className="mb-8 text-sm text-muted-strong">
              Our hijabs come in two generous sizes to suit different wrapping
              styles and preferences.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Size
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Width
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Length
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hijabSizes.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-border/50 transition-colors hover:bg-primary-soft"
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.width}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.length}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Jewelry */}
        {active === "jewelry" && (
          <div>
            <h2 className="mb-2 font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground">
              Jewelry — Ring Sizes
            </h2>
            <p className="mb-8 text-sm text-muted-strong">
              Measurements are in millimetres. For the most accurate fit, measure
              a ring you already own or visit a local jeweller.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      US Size
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Inner Diameter
                    </th>
                    <th className="px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted">
                      Circumference
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ringSizes.map((row) => (
                    <tr
                      key={row.us}
                      className="border-b border-border/50 transition-colors hover:bg-primary-soft"
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">
                        {row.us}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.diameter}
                      </td>
                      <td className="px-4 py-3 text-muted-strong">
                        {row.circumference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* ── How to Measure ────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
                How to Measure
              </p>
              <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
                Finding Your
                <br />
                Perfect Fit
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary">
                    1
                  </span>
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Bust
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-strong">
                      Wrap the measuring tape around the fullest part of your
                      bust, keeping it level across your back. The tape should be
                      snug but not tight.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary">
                    2
                  </span>
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Waist
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-strong">
                      Measure around your natural waistline — the narrowest part
                      of your torso, typically just above the navel. Keep the tape
                      comfortably snug.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary">
                    3
                  </span>
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Hip
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-strong">
                      Stand with your feet together and measure around the widest
                      part of your hips and buttocks. Ensure the tape is parallel
                      to the floor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary">
                    4
                  </span>
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Ring Size
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-strong">
                      Wrap a thin strip of paper around the base of the desired
                      finger. Mark where the paper overlaps, then measure the
                      length in millimetres and compare against our ring size
                      chart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/image/sizeguide_measure.png"
                alt="How to measure — Lady Fauzia Co."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tips ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
            Fit Tips
          </p>
          <h2 className="font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-3xl">
            Tips for the Perfect Fit
          </h2>
          <div className="mt-8 space-y-4 text-left text-sm leading-relaxed text-muted-strong md:text-base">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">✦</span>
              <p>
                Always measure over lightweight clothing or undergarments for the
                most accurate results.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">✦</span>
              <p>
                If you fall between two sizes, size up for a relaxed, flowing fit
                or size down for a more tailored silhouette.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">✦</span>
              <p>
                Our kaftans and abayas are designed with a generous, forgiving
                cut. When in doubt, your regular size will offer a beautiful
                drape.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">✦</span>
              <p>
                For hijabs, consider your preferred wrapping style. The Large size
                offers more fabric for layered or voluminous styles.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">✦</span>
              <p>
                Still unsure? Our styling team is here to help. Reach out at{" "}
                <a
                  href="mailto:support@ladyfauzia.com"
                  className="text-primary underline underline-offset-2"
                >
                  support@ladyfauzia.com
                </a>{" "}
                for personalised size advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
