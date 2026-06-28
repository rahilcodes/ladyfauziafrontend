import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craftsmanship | Lady Fauzia Co.",
  description:
    "Explore the artistry behind Lady Fauzia Co. — premium silks, hand-sewn crystal embellishments, 100-point quality inspections, and ethically sourced materials. Every detail matters.",
  openGraph: {
    title: "Craftsmanship | Lady Fauzia Co.",
    description:
      "Explore the artistry behind Lady Fauzia Co. — premium silks, hand-sewn crystal embellishments, and ethically sourced materials.",
    type: "website",
  },
};

const craftDetails = [
  {
    image: "/image/craft_detail_1.png",
    title: "Hand-Placed Crystals",
    description: "Each crystal is individually placed and secured by hand for lasting brilliance.",
  },
  {
    image: "/image/craft_detail_2.png",
    title: "French Seam Finishing",
    description: "Interior seams are finished with precision, ensuring comfort against the skin.",
  },
  {
    image: "/image/craft_detail_3.png",
    title: "Premium Silk Draping",
    description: "Our silks are draped on form to achieve the perfect fall and movement.",
  },
  {
    image: "/image/craft_detail_4.png",
    title: "Hand-Rolled Hems",
    description: "Delicate hems are hand-rolled for a refined, invisible finish on every edge.",
  },
  {
    image: "/image/craft_detail_5.png",
    title: "Embroidery Artistry",
    description: "Intricate embroidery motifs are executed by skilled artisans over many hours.",
  },
  {
    image: "/image/craft_detail_6.png",
    title: "Button & Closure Detail",
    description: "Covered buttons and hidden closures maintain the clean, unbroken lines of each silhouette.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/image/craft_hero.png"
          alt="Lady Fauzia Co. — Craftsmanship"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            The Art of Detail
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            Craftsmanship
          </h1>
          <p className="mt-4 max-w-lg text-sm tracking-[0.1em] text-white/80 md:text-base">
            Where every stitch tells a story of precision, patience, and pride.
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
          <li className="text-foreground">Craftsmanship</li>
        </ol>
      </nav>

      {/* ── Fabric Selection ──────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Fabric Selection
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Only the
              <br />
              Finest Textiles
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                The foundation of every Lady Fauzia Co. garment is its fabric.
                We travel the world&apos;s most renowned textile markets to
                source materials that meet our exacting standards — because the
                way a garment feels against your skin is just as important as
                how it looks.
              </p>
              <p>
                Our collections feature premium silks with a natural lustre that
                catches light beautifully, sustainable cottons that breathe with
                the warmth of Miami and beyond, and luxury blends engineered for
                drape, durability, and a sumptuous hand feel.
              </p>
              <p>
                Every fabric is tested for colourfastness, weight consistency,
                and tactile quality before it earns a place in our atelier. We
                believe that when the raw material is exceptional, the finished
                garment is extraordinary.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/image/craft_fabric.png"
              alt="Premium silk and fabric selection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        <hr className="border-border" />
      </div>

      {/* ── Hand Finishing ────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:order-first">
            <Image
              src="/image/craft_hand.png"
              alt="Hand-finished embellishments and sewing"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Hand Finishing
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              The Human
              <br />
              Touch
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                In an age of mass production, Lady Fauzia Co. remains committed
                to the art of the human hand. Our crystal embellishments are
                placed one by one — each stone positioned with the precision of
                a jeweller to catch the light at exactly the right angle.
              </p>
              <p>
                Hand-sewn details distinguish our garments from anything
                produced on an assembly line. From delicate beadwork and
                embroidery to hand-rolled hems and covered buttons, these are
                the finishing touches that transform a dress into a treasure.
              </p>
              <p>
                Our artisans bring decades of combined experience to every
                piece. Their skilled hands are the final — and most important
                — layer of quality that makes a Lady Fauzia Co. garment
                unmistakably special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Promise ───────────────────────────────────── */}
      <section className="bg-primary-soft py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
                Quality Promise
              </p>
              <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
                100-Point Quality
                <br />
                Inspection
              </h2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
                <p>
                  Before any Lady Fauzia Co. garment reaches you, it passes
                  through our rigorous 100-point quality inspection. Every seam,
                  stitch, embellishment, and finish is examined with meticulous
                  care to ensure it meets the standard our name represents.
                </p>
                <p>
                  Our quality process spans the entire production journey — from
                  incoming fabric inspection to in-process checks during
                  construction, to a final comprehensive review before packaging.
                  Nothing is left to chance.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-t border-border pt-4">
                  <p className="font-outfit text-2xl font-semibold text-primary">
                    100
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted">
                    Quality checkpoints
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-outfit text-2xl font-semibold text-primary">
                    100%
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted">
                    Ethically sourced
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-outfit text-2xl font-semibold text-primary">
                    3×
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted">
                    Inspected per garment
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-outfit text-2xl font-semibold text-primary">
                    0
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted">
                    Compromises made
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/image/craft_quality.png"
                alt="100-point quality inspection process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship Detail Grid ─────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
            In Detail
          </p>
          <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
            The Details That Define Us
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {craftDetails.map((detail, index) => (
            <article key={index} className="group">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-outfit text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
                {detail.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Crafted With Love
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Experience the difference that true craftsmanship makes.
          </p>
          <Link
            href="/search"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
