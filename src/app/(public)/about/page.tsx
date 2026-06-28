import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Lady Fauzia Co.",
  description:
    "Discover the story behind Lady Fauzia Co. — a premium modest fashion brand built on the belief that elegance and modesty are partners, not opposites. Joyful. Always.",
  openGraph: {
    title: "Our Story | Lady Fauzia Co.",
    description:
      "Discover the story behind Lady Fauzia Co. — a premium modest fashion brand built on the belief that elegance and modesty are partners, not opposites.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/image/about_hero.png"
          alt="Lady Fauzia Co. — Our Story"
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
            Our Story
          </h1>
          <p className="mt-4 max-w-lg text-sm tracking-[0.1em] text-white/80 md:text-base">
            Modest luxury, timeless elegance, and joyful self-expression — woven
            into every thread.
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
          <li className="text-foreground">Our Story</li>
        </ol>
      </nav>

      {/* ── Brand Vision ──────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Brand Vision
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Where Modesty
              <br />
              Meets Luxury
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                Lady Fauzia Co. was born from a singular conviction: that modest
                fashion deserves the same calibre of craftsmanship, luxury, and
                editorial beauty afforded to any other corner of the fashion
                world. We believe that choosing to dress modestly is not a
                compromise — it is a powerful, joyful declaration of
                self-expression.
              </p>
              <p>
                Every collection is a celebration of the modern woman who values
                elegance without excess, who moves through the world with quiet
                confidence, and who refuses to choose between her values and her
                sense of style.
              </p>
              <p>
                Our designs bridge the gap between timeless silhouettes and
                contemporary sensibility — creating pieces that feel as luxurious
                to wear as they are beautiful to behold.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/image/about_vision.png"
              alt="Lady Fauzia Co. brand vision — elegant modest fashion"
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

      {/* ── Our Mission ───────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:order-first">
            <Image
              src="/image/about_mission.png"
              alt="Our mission — joyful modest fashion"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Our Mission
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Bringing Joy
              <br />
              Through Fashion
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                At Lady Fauzia Co., our mission is simple yet profound: to bring
                joy through fashion that celebrates modesty without compromising
                on luxury. We exist for the woman who sees her wardrobe as an
                extension of her spirit — refined, intentional, and full of
                life.
              </p>
              <p>
                Every garment we create is guided by the principle that true
                luxury lies in how a piece makes you feel. From the weight of
                our silks to the precision of every hand-sewn embellishment, we
                pour intention into every detail so that you can step into your
                day feeling radiant.
              </p>
              <p>
                We are here to redefine what modest fashion looks like on the
                global stage — not by following trends, but by setting a
                standard that puts joy, quality, and dignity at the centre of
                every design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────────── */}
      <section className="bg-primary-soft py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Our Values
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {/* Value — Modesty */}
            <article className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="text-2xl text-primary">✦</span>
              </div>
              <h3 className="font-outfit text-lg font-semibold tracking-[0.15em] uppercase text-foreground">
                Modesty
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-strong">
                We believe elegance and modesty are partners, not opposites.
                Covering more has never meant expressing less. Our designs prove
                that grace, confidence, and bold style flourish beautifully
                within the framework of modesty.
              </p>
            </article>

            {/* Value — Quality */}
            <article className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="text-2xl text-primary">◇</span>
              </div>
              <h3 className="font-outfit text-lg font-semibold tracking-[0.15em] uppercase text-foreground">
                Quality
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-strong">
                Premium fabrics and hand-finished details define every Lady
                Fauzia Co. garment. We source the finest silks, sustainable
                cottons, and luxury blends — because the woman who wears our
                pieces deserves nothing less than exceptional.
              </p>
            </article>

            {/* Value — Joy */}
            <article className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="text-2xl text-primary">❋</span>
              </div>
              <h3 className="font-outfit text-lg font-semibold tracking-[0.15em] uppercase text-foreground">
                Joy
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-strong">
                Every piece is designed to bring joy to the wearer. Fashion
                should be a source of delight — a daily ritual that lifts your
                spirit. Our slogan, &ldquo;Joyful. Always.&rdquo;, is not just
                a tagline; it is a promise stitched into the heart of everything
                we create.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Miami Launch ──────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Our Home
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Launching in
              <br />
              Miami, FL
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                Lady Fauzia Co. is proudly launching from Miami, Florida — a
                city where cultures converge, creativity thrives, and bold
                individuality is celebrated. Miami&apos;s vibrant energy and
                diverse tapestry of communities make it the perfect birthplace
                for a brand that lives at the intersection of tradition and
                modernity.
              </p>
              <p>
                From our Miami design studio, we draw inspiration from the
                city&apos;s warm light, Art Deco elegance, and the rich cultural
                mosaic that defines South Florida. It is here that every
                collection begins its journey — from sketch to finished
                garment.
              </p>
              <p>
                But this is only the beginning. Our vision extends far beyond
                the shores of Florida. With plans for global expansion, we are
                building Lady Fauzia Co. to be a worldwide destination for
                modest luxury — bringing our promise of joy, quality, and
                timeless elegance to women everywhere.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/image/about_miami.png"
              alt="Lady Fauzia Co. — Miami, FL flagship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Brand Promise Strip ───────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Joyful. Always.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Every garment. Every detail. Every woman who wears our name.
          </p>
          <Link
            href="/search"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
