import Image from "next/image";
import Link from "next/link";

const GRID_IMAGES = [
  { src: "/image/insta_1.png", alt: "Lady Fauzia lifestyle" },
  { src: "/image/insta_2.png", alt: "Lady Fauzia elegant hijab" },
  { src: "/image/insta_3.png", alt: "Lady Fauzia kaftan styling" },
  { src: "/image/insta_4.png", alt: "Lady Fauzia jewelry detail" },
];

export default function InstagramGrid() {
  return (
    <section className="py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="6" r="1" fill="currentColor" />
          </svg>
          <span className="text-sm font-semibold tracking-[0.1em] text-foreground">
            @ladyfauziaco
          </span>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.2em] text-muted uppercase">
          Follow us for daily inspiration
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {GRID_IMAGES.map((img, index) => (
          <Link
            key={index}
            href="https://instagram.com/ladyfauziaco"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg"
            aria-label={`View on Instagram: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(min-width: 640px) 25vw, 50vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
