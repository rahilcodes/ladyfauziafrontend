import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

/* ── Article Data ─────────────────────────────────────────────── */

interface Article {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

const articles: Record<string, Article> = {
  "the-art-of-modest-luxury": {
    slug: "the-art-of-modest-luxury",
    title: "The Art of Modest Luxury",
    date: "June 15, 2026",
    readingTime: "6 min read",
    image: "/image/journal_1.png",
    excerpt:
      "Redefining luxury fashion through the lens of modesty — exploring how covering more can reveal a deeper, more intentional form of elegance.",
    content: [
      "There is a quiet revolution happening in fashion. For too long, the conversation around luxury has been dominated by a singular aesthetic — one that prizes exposure over intention, shock over substance. But a new generation of women is rewriting the rules, proving that true luxury has nothing to do with how much skin is showing and everything to do with how a garment makes you feel.",
      "At Lady Fauzia Co., we believe modest fashion is not a constraint — it is a canvas. When you remove the pressure to reveal, you create space for artistry. The drape of a silk kaftan, the architecture of a perfectly cut sleeve, the way light catches a hand-placed crystal — these are the details that define luxury in its purest form. Modesty invites the eye to linger on craftsmanship, on the beauty of line and proportion, rather than rushing past the garment to what lies beneath.",
      "This philosophy draws from centuries of sartorial tradition. From the opulent courts of the Ottoman Empire to the refined elegance of mid-century couture, history is rich with examples of fashion that celebrated coverage as a hallmark of sophistication. The most iconic silhouettes — the floor-length gown, the tailored coat, the draped veil — have always understood that mystery is more magnetic than revelation.",
      "The modern modest fashion movement is building on this legacy with a contemporary lens. Today's modest luxury is not about adhering to a rigid dress code; it is about making a conscious choice to dress with intention and elegance. It is about investing in pieces that are designed to last — not just in their construction, but in their timelessness. A Lady Fauzia Co. kaftan is not a trend; it is a wardrobe companion for years to come.",
      "As we launch our first collection from Miami, we invite you to experience this art for yourself. To feel the weight of real silk against your skin. To see how a garment designed with care and conviction can transform not just how you look, but how you carry yourself through the world. This is the art of modest luxury — and it has never been more beautiful.",
    ],
  },
  "miami-our-first-chapter": {
    slug: "miami-our-first-chapter",
    title: "Miami: Our First Chapter",
    date: "June 8, 2026",
    readingTime: "5 min read",
    image: "/image/journal_2.png",
    excerpt:
      "Why Miami? Discover how the Magic City became the perfect birthplace for Lady Fauzia Co.",
    content: [
      "When we set out to build Lady Fauzia Co., one of the first questions we asked was: where should this brand call home? We considered the established fashion capitals — New York, London, Paris. But something about Miami called to us. It wasn't just the golden light that bathes the city year-round, or the palm-lined streets that feel like a permanent invitation to live beautifully. It was the spirit of the place.",
      "Miami is a city built by dreamers. It is where Latin America meets the Caribbean meets the American South — a cultural crossroads unlike any other. Walk through the Design District, and you'll see cutting-edge architecture standing alongside vibrant street art. Visit Wynwood, and galleries overflow with creators who refuse to colour inside the lines. This is a city that celebrates boldness, but not at the expense of beauty.",
      "For a brand rooted in modesty, Miami might seem like an unconventional choice. But that's precisely why it works. Lady Fauzia Co. is about defying expectations — about proving that elegance and modesty are not contradictions but natural partners. Miami, a city that constantly reinvents itself while honouring its diverse roots, embodies that same philosophy. There is a warmth here, a generosity of spirit, that aligns perfectly with our brand's core value: joy.",
      "Our Miami design studio is where every Lady Fauzia Co. garment begins its journey. Bathed in natural light, surrounded by fabric swatches in champagne, ivory, and gold, it is a space where creativity and craftsmanship converge. From here, we can feel the pulse of a city that is both cosmopolitan and deeply connected to its cultural heritage — a duality that infuses everything we design.",
      "But Miami is just our first chapter. We chose this city not as a final destination, but as a launchpad. From here, we aim to bring the Lady Fauzia Co. experience to women around the world — carrying with us the sunshine, the cultural richness, and the joyful energy that only Miami can provide. This is where our story begins.",
    ],
  },
  "styling-the-perfect-kaftan": {
    slug: "styling-the-perfect-kaftan",
    title: "Styling the Perfect Kaftan",
    date: "June 1, 2026",
    readingTime: "4 min read",
    image: "/image/journal_3.png",
    excerpt:
      "From brunch to black-tie — a comprehensive guide to styling the kaftan for every occasion.",
    content: [
      "The kaftan is one of fashion's most enduring garments — and for good reason. Born in the courts and cultures of the Middle East and Central Asia, the kaftan has traversed centuries and continents, evolving from royal ceremonial dress to a modern symbol of effortless elegance. At Lady Fauzia Co., the kaftan is central to our design philosophy: a garment that marries modesty with luxury in a single, flowing silhouette.",
      "For a casual daytime look, let your kaftan speak for itself. Pair a silk kaftan in a soft neutral tone with minimal gold jewellery — a delicate chain necklace and small hoop earrings are all you need. Slide into flat leather sandals for a relaxed brunch look, or opt for espadrille wedges to add height without sacrificing comfort. For hijabi styling, a coordinating silk hijab in a complementary shade creates a polished, monochromatic effect that feels both modern and refined.",
      "When evening calls for something more dramatic, the kaftan rises to the occasion with remarkable ease. Choose a kaftan in a richer tone — deep champagne, midnight navy, or ivory with crystal embellishments — and elevate it with statement accessories. A structured clutch in gold or metallic leather, chandelier earrings, and heeled mules transform the kaftan into a commanding evening ensemble. The key is to let the garment's inherent drama do the work; resist the urge to over-accessorise.",
      "For professional settings, the kaftan offers a refreshing alternative to the traditional blazer-and-trouser formula. A tailored kaftan in a structured fabric — think crepe or heavy silk — paired with slim trousers underneath creates a silhouette that is both authoritative and distinctive. Add a leather belt at the waist to define the shape, and finish with pointed-toe flats or low block heels. This look commands respect while remaining true to your personal style.",
      "The beauty of the kaftan is its versatility. It does not ask you to be someone you are not; instead, it amplifies who you already are. Whether you wear it to a seaside dinner, a gallery opening, or a quiet afternoon at home, the kaftan adapts to your life — and that is the hallmark of truly great design.",
    ],
  },
};

const articleList = Object.values(articles);

/* ── Static Params ────────────────────────────────────────────── */

export function generateStaticParams() {
  return articleList.map((article) => ({
    slug: article.slug,
  }));
}

/* ── Metadata ─────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Article Not Found | Lady Fauzia Co.",
    };
  }

  return {
    title: `${article.title} | Lady Fauzia Co.`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Lady Fauzia Co.`,
      description: article.excerpt,
      type: "article",
    },
  };
}

/* ── Page Component ───────────────────────────────────────────── */

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground">
          Article Not Found
        </h1>
        <p className="mt-4 text-sm text-muted-strong">
          The article you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/journal"
          className="mt-8 inline-block border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  const relatedArticles = articleList.filter((a) => a.slug !== article.slug);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center text-white px-6 md:pb-16">
          <time className="mb-3 text-xs tracking-[0.2em] uppercase text-white/70">
            {article.date} · {article.readingTime}
          </time>
          <h1 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase md:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-screen-md px-6 py-6 md:px-12"
      >
        <ol className="flex items-center gap-2 text-xs tracking-[0.15em] text-muted">
          <li>
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/journal" className="transition hover:text-primary">
              The Journal
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">{article.title}</li>
        </ol>
      </nav>

      {/* ── Article Body ──────────────────────────────────────── */}
      <article className="mx-auto max-w-screen-md px-6 py-12 md:px-12 md:py-20">
        <div className="space-y-6 text-base leading-[1.8] text-muted-strong">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:text-foreground"
          >
            ← Back to The Journal
          </Link>
        </div>
      </article>

      {/* ── Related Articles ──────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Continue Reading
            </p>
            <h2 className="font-outfit text-2xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-3xl">
              Related Articles
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            {relatedArticles.map((related) => (
              <article key={related.slug} className="group">
                <Link href={`/journal/${related.slug}`} className="block">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>
                  <div className="mt-4">
                    <time className="text-xs tracking-[0.15em] uppercase text-muted">
                      {related.date}
                    </time>
                    <h3 className="mt-2 font-outfit text-lg font-semibold tracking-[0.1em] text-foreground transition-colors group-hover:text-primary">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                      {related.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-xs tracking-[0.2em] uppercase text-primary">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
