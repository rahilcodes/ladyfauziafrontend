import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal | Lady Fauzia Co.",
  description:
    "Explore The Journal by Lady Fauzia Co. — editorial stories on modest luxury, styling guides, and the creative journey behind our collections.",
  openGraph: {
    title: "The Journal | Lady Fauzia Co.",
    description:
      "Editorial stories on modest luxury, styling guides, and the creative journey behind Lady Fauzia Co.",
    type: "website",
  },
};

const articles = [
  {
    slug: "the-art-of-modest-luxury",
    title: "The Art of Modest Luxury",
    date: "June 15, 2026",
    image: "/image/journal_1.png",
    excerpt:
      "Redefining luxury fashion through the lens of modesty — exploring how covering more can reveal a deeper, more intentional form of elegance that transcends fleeting trends.",
  },
  {
    slug: "miami-our-first-chapter",
    title: "Miami: Our First Chapter",
    date: "June 8, 2026",
    image: "/image/journal_2.png",
    excerpt:
      "Why Miami? Discover how the Magic City's vibrant cultures, warm golden light, and fearless creative spirit became the perfect birthplace for Lady Fauzia Co.",
  },
  {
    slug: "styling-the-perfect-kaftan",
    title: "Styling the Perfect Kaftan",
    date: "June 1, 2026",
    image: "/image/journal_3.png",
    excerpt:
      "From brunch to black-tie — a comprehensive guide to styling the kaftan for every occasion, featuring tips on layering, accessorising, and making it unmistakably yours.",
  },
];

export default function JournalPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/image/journal_hero.png"
          alt="Lady Fauzia Co. — The Journal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            Stories &amp; Inspiration
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            The Journal
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
          <li className="text-foreground">The Journal</li>
        </ol>
      </nav>

      {/* ── Article Grid ──────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="group">
              <Link href={`/journal/${article.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                {/* Meta */}
                <div className="mt-5">
                  <time className="text-xs tracking-[0.15em] uppercase text-muted">
                    {article.date}
                  </time>
                  <h2 className="mt-2 font-outfit text-xl font-semibold tracking-[0.1em] text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-strong">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-xs tracking-[0.2em] uppercase text-primary">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Stay Inspired
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Subscribe to The Journal for stories on modest luxury, styling
            guides, and first access to new collections.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </>
  );
}
